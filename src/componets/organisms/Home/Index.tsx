import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,

} from 'react-native';

class Home extends React.Component{
  render(){
  return (
    <View style={styles.cuadro}>      
            <View  >
              <Text style={styles.texto}> Bienvenidos al Home de navegación </Text>
            </View>
      
    </View>
  );
  }
};
const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    position: 'absolute', right: 8, top:10
  },
  cuadro: {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: 'grey',
    padding: 20,
    margin: 5
 
  },
  texto: {
    flexDirection: "row",
    maxWidth:300,
    fontWeight: 'bold',
    padding: 5,
    color: 'white'
  },
  boton: {
    fontWeight: 'bold',
    backgroundColor: 'grey',
    padding: 5
  },
});
export default Home;


