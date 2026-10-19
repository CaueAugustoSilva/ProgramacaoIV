import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';
import { ContactItem } from '../components/ContactItem';

export const ChatListScreen = ({ navigation }: any) => {
    const [ipInput, setIpInput] = useState('');
    const [contacts, setContacts] = useState<string[]>(['192.168.1.50']);

    const handleConnect = () => {
        if (ipInput.trim() === '') return;
        if (!contacts.includes(ipInput)) {
            setContacts([...contacts, ipInput]);
        }
        navigation.navigate('ChatScreen', { peerIp: ipInput });
    };

    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <Text style={styles.label}>Conectar a um IP na LAN:</Text>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: 192.168.1.X"
                        placeholderTextColor="#8696a0"
                        value={ipInput}
                        onChangeText={setIpInput}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleConnect}>
                        <Text style={styles.buttonText}>Conversar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.headerTitle}>IPs Recentes</Text>

            <FlatList
                data={contacts}
                keyExtractor={(item) => item}
                renderItem={({ item }: { item: string }) => (
                    <ContactItem
                        ipAddress={item}
                        onPress={() => navigation.navigate('ChatScreen', { peerIp: item })}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f2f5' },
    sectionContainer: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#3b4a54',
        marginBottom: 8
    },
    inputRow: { flexDirection: 'row' },
    input: {
        flex: 1,
        backgroundColor: '#f0f2f5',
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 44,
        fontSize: 16
    },
    button: {
        marginLeft: 8,
        backgroundColor: '#00a884',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderRadius: 8
    },
    buttonText: { color: '#fff', fontWeight: 'bold' },
    headerTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#667781',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8
    },
});