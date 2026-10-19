// src/components/MessageBubble.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageBubbleProps {
  text: string;
  isMe: boolean;
  timestamp: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ text, isMe, timestamp }) => {
  return (
    <View style={[styles.container, isMe ? styles.myMessageContainer : styles.peerMessageContainer]}>
      <View style={[styles.bubble, isMe ? styles.myBubble : styles.peerBubble]}>
        <Text style={[styles.text, isMe ? styles.myText : styles.peerText]}>
          {text}
        </Text>
        <Text style={[styles.timestamp, isMe ? styles.myTimestamp : styles.peerTimestamp]}>
          {timestamp}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginHorizontal: 12,
    flexDirection: 'row',
  },
  myMessageContainer: {
    justifyContent: 'flex-end',
  },
  peerMessageContainer: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '75%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  myBubble: {
    backgroundColor: '#dcf8c6',
  },
  peerBubble: {
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 16,
  },
  myText: {
    color: '#000',
  },
  peerText: {
    color: '#000',
  },
  timestamp: {
    fontSize: 10,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  myTimestamp: {
    color: '#667781',
  },
  peerTimestamp: {
    color: '#667781',
  },
});