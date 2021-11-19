import * as React from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { formato } from '../css/Styles';



export default function MapaGoogle(){

const [markes,SetMarkes] = React.useState([
    {
    latlng:{
        latitude: -23.54076056696129,
        longitude: -46.57500086076738
    },
    title:"Senac Tatuapé",
    description:"Local de estudo técnico",   
    },

    {
        latlng:{
            latitude: -23.541298692324702,
            longitude: -46.5751930760676
        },
        title:"Casa do Pastel",
        description:"Restaurante e Lanchonete ",   
        },
]);


    return(
        <View style={formato.conteudo}>
            <MapView 
           initialRegion={{


               latitude:-23.54076056696129,
               longitude:-46.57500086076738,
               latitudeDelta:0.0007,
               longitudeDelta:0.0007,
           }} 
            
            style={formato.Mapa}  
            >
        {
            markes.map((m,ix)=>(
            <Marker
                key={ix}
                coordinate={m.latlng}
                title={m.title}
                description={m.description}
                />
            )) 
        }
</MapView>
        </View>
    );
}