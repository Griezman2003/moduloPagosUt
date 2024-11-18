import React from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';
import { Drawer } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Sidebar = ({ slideAnim }) => {
    const navigation = useNavigation();
    return (
        <Animated.View
        style={[
            styles.sidebar,
            {
                transform: [{ translateX: slideAnim }],
            },
        ]}
        >
        <Drawer.Section title="Pago ut">
        <Drawer.Item
        label="Inicio"
        icon="star"
        style={{backgroundColor: '#64ffda' }}
        onPress={() => navigation.navigate('index')}
        />
        <Drawer.Item
        label="Perfil"
        icon="star"
        style={{backgroundColor: '#64ffda', marginVertical:20 }} 
        onPress={() => {}}
        />
        </Drawer.Section>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '60%',
        backgroundColor: '#100F1F', 
        zIndex: 2, 
    },
});

export default Sidebar;
