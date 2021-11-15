import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ProgramarScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title="JAVASCRIPT" 
                onPress={()=>navigation.navigate('JavascriptScreen')}
            />
            <Button 
                title="REACT" 
                onPress={()=>navigation.navigate('ReactScreen')}
            />
        </View>
    )
}

export default ProgramarScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    tinyLogo: {
        width: 300,
        height: 400,
    },
});