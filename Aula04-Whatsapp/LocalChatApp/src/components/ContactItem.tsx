// src/components/ContactItem.tsx
import React from 'react';

import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface ContactItemProps {
    ipAddress: string;
    onPress: () => void;
}
export const ContactItem: React.FC<ContactItemProps> = ({ ipAddress,
    onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>💬</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>Dispositivo LAN</Text>
                <Text style={styles.subtitle}>IP: {ipAddress}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f2f5',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#dfe5e8',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    avatarText: { fontSize: 24 },
    info: { flex: 1 },
    title: { fontSize: 16, fontWeight: 'bold', color: '#111b21' },
    subtitle: { fontSize: 14, color: '#667781', marginTop: 2 },
});