import * as React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { formato } from '../css/Styles';
export default function Home({navigation}){


   

    return(

        <View>



        
<View style={formato.menu}>
    <TouchableOpacity style={formato.btn}
    onPress={()=>{
        navigation.navigate("Camera");
    }}>
        <Text style={formato.txtbtn}>Camera </Text>
    </TouchableOpacity>

<TouchableOpacity style={formato.btn}
    onPress={()=>{
        navigation.navigate("Galeria");
    }}>
        <Text style={formato.txtbtn}>Galeria </Text>
    </TouchableOpacity>



    <TouchableOpacity style={formato.btn}
    onPress={()=>{
        navigation.navigate("Mapa");
    }}>
        <Text style={formato.txtbtn}>Mapa Google </Text>
    </TouchableOpacity>




    <TouchableOpacity style={formato.btn}
    onPress={()=>{
        navigation.navigate("PaginaWeb");
    }}>
        <Text style={formato.txtbtn}>PaginaWeb </Text>
    </TouchableOpacity>

    
</View>
        </View>
    );
}