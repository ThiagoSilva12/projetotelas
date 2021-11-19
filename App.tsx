import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Camera from './screens/TelaCamera';
import Galeria from './screens/Galeria';
import MapaGoogle from './screens/MapaGoogle';
import PaginaWeb from './screens/PaginaWeb';
const Pilha =createNativeStackNavigator();


export default function App() {
  return (

<NavigationContainer>

<Pilha.Navigator>

  <Pilha.Screen name="Home" component={Home}/>
    <Pilha.Screen name="Camera" component={Camera}/>
    <Pilha.Screen name="Galeria" component={Galeria}/>
    <Pilha.Screen name="Mapa" component={MapaGoogle}/>
    <Pilha.Screen name="PaginaWeb" component={PaginaWeb} options={{headerShown:false}}/>
</Pilha.Navigator>

</NavigationContainer>


   
  );
}


