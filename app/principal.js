import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Avatar, Card, Button } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';

export default function Principal (){
    const data = [
        { id: 1, 
            nombre: 'Blurryface 125', 
            fecha: '17/11/2024', 
            monto: '$12500' 
        },
        { id: 2, 
            nombre: 'Blurryface 126', 
            fecha: '18/11/2024', 
            monto: '$8500' 
        },
        { id: 3, 
            nombre: 'Blurryface 127', 
            fecha: '19/11/2024', 
            monto: '$650' 
        },
        { id: 4, 
            nombre: 'Blurryface 128', 
            fecha: '20/11/2024', 
            monto: '$4500' },
        { id: 5, 
                nombre: 'Blurryface 129', 
                fecha: '21/11/2024', 
                monto: '$1050' },
        ];
            
    const targetas = [
        {id: 1, 
            date: '17/2024',
            cardNumber: '1478 2265 4595 9874',
            name: 'Gamaliel Garcia',
            cardType: 'Mastercard',
            imageSource: require('../assets/images/mastercard.jpg'),
        },
        {id:2,
            date: '18/2024',
            cardNumber: '2345 6789 1234 5678',
            name: 'Maria Lopez',
            cardType: 'Visa',
            imageSource: require('../assets/images/mastercard.jpg'),
        },
        {
            id:3,
            date: '19/2024',
            cardNumber: '2345 6789 1234 5678',
            name: 'Juan lopez',
            cardType: 'Mastercard',
            imageSource: require('../assets/images/mastercard.jpg'),
        }
        ];
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
                
                <ScrollView
                style={{ marginTop: 30, height: 250 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                <View style={{ flexDirection: 'row' }}>
                {targetas.map((item) => (
                    <View key={item.id} style={{ marginRight: 10 }}>
                    <LinearGradient
                    colors={['#5C34A6', '#A280CF', '#5C34A6']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ borderRadius: 25, margin: 5 }}
                    >
                    <Card style={{ backgroundColor: 'transparent', width: 360, borderRadius: 25, flex: 1 }}>
                    <Card.Content style={{ gap: 20 }}>
                    <Text style={{ textAlign: 'right', color: 'white' }} variant="bodyMedium">
                    {item.date}
                    </Text>
                    <View style={{ display: 'flex', justifyContent: 'center', height: 60 }}>
                    <Text style={{ color: 'white', fontSize: 20, letterSpacing: 3 }} variant="bodyMedium">
                    {item.cardNumber}
                    </Text>
                    </View>
                    <View style={{display: 'flex',alignItems: 'center',flexDirection: 'row',gap: 150,height: 90,}}>
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
                    </LinearGradient>
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
                {data.map((item) => (
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
        
        