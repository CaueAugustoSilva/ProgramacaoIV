// src/screens/ChatScreen.tsx
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import { MessageBubble } from '../components/MessageBubble';
import { InputBar } from '../components/InputBar';
import { LanSocketService } from '../services/LanSocketService';

interface Message {
  id: string;
  text: string;
  isMe: boolean;
  timestamp: string;
}

export const ChatScreen = ({ route }: any) => {
  const { peerIp } = route.params || { peerIp: '255.255.255.255' };
  const [messages, setMessages] = useState<Message[]>([]);
  const lanService = LanSocketService.getInstance();

  useEffect(() => {
    lanService.init((msg, senderIp) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: `[${senderIp}] ${msg}`,
        isMe: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      lanService.close();
    };
  }, []);

  const handleSendMessage = (text: string) => {
    lanService.sendMessage(text, peerIp);
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isMe: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble text={item.text} isMe={item.isMe} timestamp={item.timestamp} />
        )}
        contentContainerStyle={styles.messageList}
      />
      <InputBar onSend={handleSendMessage} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efeae2',
  },
  messageList: {
    paddingVertical: 16,
  },
});