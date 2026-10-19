// src/services/LanSocketService.ts
import UdpSocket from 'react-native-udp';

const PORT = 41234;

export class LanSocketService {
  private static instance: LanSocketService;
  private socket: any = null;
  private onMessageCallback: ((msg: string, senderIp: string) => void) | null = null;

  private constructor() {}

  public static getInstance(): LanSocketService {
    if (!LanSocketService.instance) {
      LanSocketService.instance = new LanSocketService();
    }
    return LanSocketService.instance;
  }

  public init(onMessage: (msg: string, senderIp: string) => void) {
    this.onMessageCallback = onMessage;
    this.socket = UdpSocket.createSocket({ type: 'udp4', reusePort: true });

    this.socket.on('message', (msg: { toString: () => string }, rinfo: { address: any }) => {
      const messageText = msg.toString();
      if (this.onMessageCallback) {
        this.onMessageCallback(messageText, rinfo.address);
      }
    });

    this.socket.bind(PORT, () => {
      try {
        this.socket.setBroadcast(true);
      } catch (e) {
        console.error('Erro ao configurar broadcast:', e);
      }
    });
  }

  public sendMessage(text: string, targetIp: string = '255.255.255.255') {
    if (!this.socket) return;
    
    const buffer = Buffer.from(text);
    this.socket.send(buffer, 0, buffer.length, PORT, targetIp, (err: any) => {
      if (err) console.error('Erro ao enviar mensagem:', err);
    });
  }

  public close() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}