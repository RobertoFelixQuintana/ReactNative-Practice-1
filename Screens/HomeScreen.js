import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.black}>Bienvenido</Text>
            <Image 
            style={styles.tinyLogo}
            source={{
            uri:'https://www.eluniversal.com.mx/sites/default/files/u40162/meme-regeso-a-clases-5.jpeg',
            }}/>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 350,
        height: 400,
    },
    black:{
        fontWeight:'bold',
        fontSize:22,
    },
});
  