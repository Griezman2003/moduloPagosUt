import { Linking } from "react-native";

export const facebook = () => {
    Linking.openURL('https://facebook.com')
    .catch((error) => console.error('Error al abrir el enlace: ', error));
};


export const google = () => {
    Linking.openURL('https://google.com')
    .catch((error) => console.error('Error al abrir el enlace: ', error));
};

export const x = () =>{
    Linking.openURL('https://x.com').catch((error)=> console.log('Error al abrir el enlace: ', error))
}
