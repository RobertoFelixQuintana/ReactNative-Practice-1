import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const GithubScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Ionicons name={"logo-github"} size={130} color='black'/>
            <Text style={styles.black}>@RobertoFelixQuintana</Text>
        </View>
    )
}

export default GithubScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'cyan',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 300,
        height: 400,
    },
    black:{
        fontWeight:'bold',
    },
});