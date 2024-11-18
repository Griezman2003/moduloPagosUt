import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Avatar, Card, Button } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import { dato, targetas } from "./json/json";


export default function Principal (){
    return (
        <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
        <View style={style.header}>
        <AntDesign name="menu-fold" size={35} color="white" />
        <FontAwesome name="user" size={35} color="white" />
        </View>
        <View style={style.balance}>
        <Text style={{color:'white', fontSize:12}}>Total de Balance</Text>
        <Text style={{color:'white', fontSize:30}}>$3,831.59</Text>
        </View>
        {/* ----------------------------------------------------------------------------------------- */}
        
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
        
        
        {/* ------------------------------------------------------------------------------------------------ */}
        
        <View style={{marginTop:50, display:'flex', justifyContent:'center', alignItems:'center',}}>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:50,
            backgroundColor:'#5C34A6', width:265, height:65, borderRadius:99999,
        }}>
        <TouchableOpacity>
        <View style={{backgroundColor:'#000', padding:10, borderRadius:20}}>
        <Text style={{color:'white', fontSize:20}}>
        Ingresos
        </Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View>
        <Text style={{color:'white', fontSize:20}}>
        Egresos
        </Text>
        </View>
        </TouchableOpacity>
        </View>
        </View>
        
        {/* -------------------------------------------------------------------------------------------------------- */}
        
        <View style={{ marginTop: 50, paddingHorizontal:10 }}>
        {dato.map((item) => (
            <View key={item.id}  style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-between',
                alignItems:'center', paddingHorizontal:15,
            }}>
            <View style={{ flexDirection: 'row', gap: 10, }}>
            <Avatar.Image size={40} source={require('../assets/images/react-logo.png')} />
            <View>
            <Text style={{ color: 'white', fontSize:15 }}>{item.nombre}</Text>
            <Text style={{ color: 'white', fontSize:15 }}>{item.fecha}</Text>
            </View>
            </View>
            <Text style={{ color: 'green' }}>{item.monto}</Text>
            </View>
        ))}
        </View>
        
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container:{
        paddingVertical:35,
        backgroundColor:'#100F1F',
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:280,
    },
    balance:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        gap:5
    },
})

