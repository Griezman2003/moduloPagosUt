import React from 'react';
import { View, Text } from 'react-native';

export default function perfil() {

  function tarea(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const exito = true
        if(exito){
          resolve('La tarea fue un exito')
        }else{
          reject('hubo un error')
        }
      }, 2000);
    })
  }

  async function ejecutarTarea(){
    try {
      console.log('Iniciando tarea de validacion')
      const resultado = await tarea();
      console.log('Resultado', resultado)
    } catch (error) {
      console.error('error', error)
    }
  }

  ejecutarTarea()

  return (
    <View style={{paddingVertical:200}}>
      <Text style={{color:'#000'}}>Este es la vista perfil</Text>
    </View>
  );
};

