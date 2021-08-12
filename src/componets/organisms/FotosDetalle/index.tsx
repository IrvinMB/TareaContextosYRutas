import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import { useFotos } from '../../../contexts/foto-context';
import ListaDeAlbumes from '../ListaDeAlbumes';
import { useNavigation } from '@react-navigation/native';




 const FotoDetails = () => {
  const navigation = useNavigation();
  const {lasFotos,setFotoDetail,setSelectedAlbums, fetchFotosContext} = useFotos();
  useEffect(() => {
    fetchFotosContext();
  }, []);
  const Pagina = () => {
    setSelectedAlbums(null);
    navigation.goBack();
  };
  return (
    <View>
        <Button  color="#841584" title="< - Back" onPress={() =>Pagina()} />
      {lasFotos.length > 0 ? (
        <FlatList
          data={lasFotos}
          renderItem={({item}) => (
            <View  style={styles.cuadro}>
              <Text style={styles.texto}> {item.title}</Text>
              <Image
                style={styles.image}
                source={{uri: item.thumbnailUrl}}
              />
            </View>
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
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
    height: 100,
    padding: 20,
    margin: 5
  },
  texto: {
    flexDirection: "row",
    maxWidth:300,
    fontWeight: 'bold',
    padding: 5
  },
  boton: {
    fontWeight: 'bold',
    backgroundColor: 'grey',
    padding: 5
  },
});
export default FotoDetails;