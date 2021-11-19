import * as React from 'react';
import { Text, View } from 'react-native';
import { formato } from '../css/Styles';
import { WebView }  from'react-native-webview';

export default function PaginaWeb(){

return(
    <WebView style={formato.pw}
    source={{uri:"https://www.youtube.com/"}}
    />
);


}