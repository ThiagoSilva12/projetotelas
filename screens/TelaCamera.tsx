import * as React from 'react';
import { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { useEffect } from 'react';
import { formato } from '../css/Styles';
export default function TelaCamera(){

//Estamos definido como nenhuma configuração de permissão
const[permissao,setPermissao] = React.useState(false);

const Ref = React.useRef(null)
//Definir o tipo de camera que será aberta(Back|Front)
const[tipo,setTipo] = React.useState(Camera.Constants.Type.back);



//Quando a telacamera  abrir , vamos fazer a camera do
//smartphone abrir também,sem a necessidade de o usuário
//clicar em algum botão
//para isso acontecer vamos o comando useEffect
React.useEffect(()=>{


(async()=>{
    const{status} = await Camera.requestCameraPermissionsAsync();
    const{ statusM } = await Camera.requestMicrophonePermissionsAsync();
    setPermissao(status === "granted");
    
})();

},[]);

if(permissao==false) {
    return<View />
}

    return(
        <View style={formato.conteudo}>
            <Camera style={formato.conteudo} type={tipo}
            ref={ref =>{
                this.camera = ref;
            }}
            >
                
            <TouchableOpacity onPress={()=>{
                setTipo(
                    tipo==Camera.Constants.Type.back 
                   ? Camera.Constants.Type.front 
                   : Camera.Constants.Type.back
                );
            }}>

            
           <Text style={formato.txtbtn}>
               {""}
               Flip{""}
           </Text>
                </TouchableOpacity>


            </Camera>
            <Button
            title="Tirar Foto"
            onPress={() => {
                async () => {
                    const foto = await ref.current.takePictureAsync();
                    console.log(foto);
                };
            }}
/>
        </View>
    );
}