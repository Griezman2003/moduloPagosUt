import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Text, Avatar } from 'react-native-paper';

export default function Registro() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleRegister = async () => {
        if (!nombre || !correo || !contraseña) {
            Alert.alert('Por favor complete todos los campos');
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre,
                    correo,
                    contraseña
                })
            });

            if (response.ok) {
                Alert.alert('Usuario registrado exitosamente');
            } else {
                Alert.alert('Error al registrar el usuario');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Hubo un problema al registrar el usuario');
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.fondologo}></View>
                <View style={styles.logo}>
                    <Avatar.Image size={80} source={require('../assets/images/react-logo.png')} />
                    <Text style={styles.title}>Regístrate en PagoUt</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Admin"
                        value={nombre}
                        onChangeText={setNombre}
                    />

                    <Text style={styles.label}>Correo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Test@test.com"
                        keyboardType="email-address"
                        value={correo}
                        onChangeText={setCorreo}
                    />

                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        secureTextEntry
                        value={contraseña}
                        onChangeText={setContraseña}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#6568F9',
                            height: 50,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={handleRegister}
                    >
                        <Text style={{ color: 'white', fontSize: 20 }}>Registra tu cuenta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    fondologo: {
        backgroundColor: '#6568F9',
        padding: 50,
        position: 'absolute',
        top: -350,
        left: -110,
        width: 600,
        height: 600,
        borderRadius: 500,
    },
    logo: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        color: 'white',
        fontSize: 25,
    },
    form: {
        marginTop: 90,
        padding: 20,
        gap: 15,
    },
    label: {
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'transparent',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    buttonContainer: {
        padding: 20,
    },
});
