import React, {useEffect} from 'react';
import {Text, FlatList, StyleSheet, ActivityIndicator, View} from 'react-native';
import {
  useAlbumes,
} from '../../../contexts/album-context';
import AlbumListItem from '../../moleculas/AlbumListItem';

const ListaDeAlbumes = () => {
  const {albums,fetchAlbumContext} = useAlbumes();
  useEffect(() => {
    fetchAlbumContext();
  }, []);
  return (
    <View>
    {albums.length > 0 ? (
        <>
            <Text style={styles.contenedor}>Albumes</Text>
            <FlatList
                data={albums}
                renderItem={({ item, index }) => (
                    <AlbumListItem
                        key={item.id}
                        Album={item}
                        index={index}
                    />
                )}
            />
        </>
    ) : (
        <ActivityIndicator color="#000" />
    )}
</View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    display: 'flex',
    padding: 16,

  }
});
export default ListaDeAlbumes;
