import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar, TouchableOpacity, KeyboardAvoidingView, Platform, 
    SafeAreaView, Pressable,Linking } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import { TextInput, Text, Avatar, Checkbox } from 'react-native-paper';
    import {facebook, google, x } from './redes/redes'
    
    export default function login() {
        const navigation = useNavigation();
        
        const [correo, setCorreo] = useState('');
        const [contraseña, setContraseña] = useState('');
        
        const iniciarSesion = async () => {
            if (!correo || !contraseña) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            try {
                const response = await fetch('http://192.168.1.69:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ correo, contraseña }),
                });
                
                response.status === 200 
                ? 
                (alert('Inicio de sesión exitoso'), 
                navigation.navigate('principal')) 
                :
                response.status === 401 
                ? 
                alert('Credenciales incorrectas') 
                :
                alert('Error en el servidor');

            } catch (error) {
                console.error('Error al iniciar sesión:', error);
                alert('Error al inciar sesion, intenta de nuevo');
            }
        };
        
        
        const [checked, setChecked] = useState(false);
        return (
            <SafeAreaView style={{flex:1}}>
            <StatusBar barStyle="dark-content"/>
            <KeyboardAvoidingView  style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            > 
            <ScrollView style={styles.container}>
            <View style={styles.fondologo}></View>
            <View style={styles.logo}>
            <Avatar.Image size={80} source={require('../assets/images/react-logo.png')} />
            <Text style={styles.title}>PagoUt</Text>
            </View>
            
            <View style={styles.form}>
            <Text style={styles.label}>Correo</Text>
            <TextInput 
            style={styles.input} 
            placeholder="Test@test.com" 
            keyboardType="email-address"
            onChangeText={setCorreo}
            value={correo} 
            />
            
            <Text style={styles.label}>Contraseña</Text>
            <TextInput 
            style={styles.input} 
            placeholder="********"
            onChangeText={setContraseña}
            value={contraseña} 
            secureTextEntry 
            />
            </View>
            
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={{backgroundColor:'#6568F9', height:50, borderRadius:25,
                display:'flex', justifyContent:'center', alignItems:'center'
            }} onPress={iniciarSesion}>
            <Text style={{color:'white', fontSize:20}}>Inicia sesión</Text>
            </TouchableOpacity>
            </View>
            
            
            <View style={styles.checkbox}>
            <Text style={{color: '#626CFA'}}>Recordar Contraseña</Text>
            <Checkbox 
            status={checked ? 'checked' : 'unchecked'} 
            onPress={() => setChecked(!checked)} 
            />
            <Text onPress={()=>navigation.navigate('registro')} 
            style={{color: '#626CFA', marginLeft:50}}>Registrarse</Text>
            </View>
            
            
            <View style={styles.redSocial}>
            <Text style={{fontWeight:'bold', fontSize:17}}>Iniciar Sesion con</Text>
            </View>
            
            <View style={styles.redSocial}>
            <Pressable onPress={google}>
            <Avatar.Image size={40} source={require('../assets/images/google.png')} />
            </Pressable>
            <Pressable onPress={facebook}>
            <Avatar.Image size={40} source={require('../assets/images/facebook.png')} />
            </Pressable>
            <Pressable onPress={x}>
            <Avatar.Image size={40} source={require('../assets/images/x3.jpg')} />
            </Pressable>
            </View>
            
            </ScrollView>
            </KeyboardAvoidingView>
            </SafeAreaView>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
            flexGrow:1,
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
            display: 'flex',
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
            paddingVertical: 20,
            paddingHorizontal:20,
        },
        checkbox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            flexDirection: 'row',
            paddingVertical: 20,
        },
        redSocial:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            gap:30,
            margin:15,
        }
    });
    
    
    
    