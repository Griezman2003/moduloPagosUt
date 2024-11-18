import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Pressable, Animated, Dimensions } from 'react-native';
import { Avatar, Card, Drawer } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import { dato, targetas } from "./json/json";
import  Sidebar  from "./sidebar";

export default function Principal() {
    const navigation = useNavigation();
    
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width * 0.6)).current;
    
    const toggleSidebar = () => {
        const toValue = isSidebarVisible ? -Dimensions.get('window').width * 0.6 : 0;
        Animated.timing(slideAnim, {
            toValue,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIsSidebarVisible(!isSidebarVisible);
    };
    const closeSidebar = () => {
        Animated.timing(slideAnim, {
            toValue: -Dimensions.get('window').width * 0.6,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIsSidebarVisible(false);
    };
    return (
        <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
        
        {isSidebarVisible && (
            <TouchableOpacity style={style.overlay} onPress={closeSidebar} />
        )}

        {/* Sidebar */}
        <Sidebar slideAnim={slideAnim} />
        {/* fin del sidebar */}
        
        {/* contenido general */}
        <View style={style.header}>
        <Pressable onPress={toggleSidebar}>
        <AntDesign name="menu-fold" size={35} color="white" />
        </Pressable>
        
        <TouchableOpacity onPress={() => navigation.navigate('perfil')}>
        <FontAwesome name="user" size={35} color="white" />
        </TouchableOpacity>
        </View>
        <View style={style.balance}>
        <Text style={{ color: 'white', fontSize: 12 }}>Total de Balance</Text>
        <Text style={{ color: 'white', fontSize: 30 }}>$3,831.59</Text>
        </View>
        
        {/* Tarjetas */}
        <ScrollView style={{ marginTop: 30, height: 250 }} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
        {targetas.map((item) => (
            <View key={item.id} style={{ marginRight: 10 }}>
            <Card style={{ backgroundColor: '#5C34A6', width: 374, borderRadius: 25, flex: 1 }}>
            <Card.Content style={{ gap: 20 }}>
            <Text style={{ textAlign: 'right', color: 'white' }} variant="bodyMedium">
            {item.date}
            </Text>
            <View style={{ justifyContent: 'center', height: 70 }}>
            <Text style={{ color: 'white', fontSize: 20, letterSpacing: 3 }} variant="bodyMedium">
            {item.cardNumber}
            </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 90 }}>
            <View style={{ flexDirection: 'column', gap: 10 }}>
            <Text style={{ color: 'white', fontSize: 15 }} variant="bodyMedium">
            {item.name}
            </Text>
            <Text style={{ fontSize: 20, color: 'white' }}>{item.cardType}</Text>
            </View>
            <View>
            <Avatar.Image size={65} source={item.imageSource} />
            </View>
            </View>
            </Card.Content>
            </Card>
            </View>
        ))}
        </View>
        </ScrollView>
        
        {/* Botones de ingresos y egresos */}
        <View style={{ marginTop: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <View
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 50,
            backgroundColor: '#5C34A6',
            width: 265,
            height: 65,
            borderRadius: 99999,
        }}
        >
        <TouchableOpacity>
        <View style={{ backgroundColor: '#000', padding: 10, borderRadius: 20 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Ingresos</Text>
        </View>
        </TouchableOpacity>
        
        <Pressable onPress={() => navigation.navigate('egreso')}>
        <View>
        <Text style={{ color: 'white', fontSize: 20 }}>Egresos</Text>
        </View>
        </Pressable>
        </View>
        </View>
        
        {/* Lista de datos */}
        <View style={{ marginTop: 50, paddingHorizontal: 10 }}>
        {dato.map((item) => (
            <View
            key={item.id}
            style={{
                flexDirection: 'row',
                marginVertical: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 15,
            }}
            >
            <View style={{ flexDirection: 'row', gap: 10 }}>
            <Avatar.Image size={40} source={require('../assets/images/react-logo.png')} />
            <View>
            <Text style={{ color: 'white', fontSize: 15 }}>{item.nombre}</Text>
            <Text style={{ color: 'white', fontSize: 15 }}>{item.fecha}</Text>
            </View>
            </View>
            <Text style={{ color: 'green' }}>{item.monto}</Text>
            </View>
        ))}
        </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 35,
        backgroundColor: '#100F1F',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 280,
    },
    balance: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        gap: 5,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        zIndex: 0,
    }
});
