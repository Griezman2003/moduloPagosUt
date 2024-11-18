import { Linking } from "react-native";

const facebook = () => {
    Linking.openURL('https://facebook.com')
    .catch((error) => console.error('Error al abrir el enlace: ', error));
};


const google = () => {
    Linking.openURL('https://google.com')
    .catch((error) => console.error('Error al abrir el enlace: ', error));
};

const x = () =>{
    Linking.openURL('https://x.com').catch((error)=> console.log('Error al abrir el enlace: ', error))
}

export {facebook, google, x}