import { StyleSheet,Dimensions } from "react-native";

export const formato = StyleSheet.create({
    conteudo:{
        flex:1,
        justifyContent:'center'
    },
    fundo:{
    flex:1,
    width:'100%',
    height:"auto",
    resizeMode:"cover"
    },
    menu:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:'90%',
        height:600,
        backgroundColor:'rgba(255,255,255,0.7)',
        borderRadius:10,
        margin:'auto',
        padding:20

    },
    btn:{
        width:'32%',
        height:100,
        borderWidth:1,
        borderColor:'#ccc',
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1000
    },
    txtbtn:{
        fontSize:20,
    },
    Mapa:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    },
    pw:{
        flex:1,
        justifyContent:"center",
        marginTop:30,
    },
})