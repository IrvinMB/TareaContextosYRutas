import React, { useEffect } from 'react';
import {View} from 'react-native';
import { useAlbumes } from '../../contexts/album-context';
import ListaDeAlbumes from '../../componets/organisms/ListaDeAlbumes';
import FotoDetails from '../../componets/organisms/FotosDetalle';

const HomeScreen: React.FC = () => {
  const {selectedAlbums,setSelectedAlbums} = useAlbumes();
  useEffect(() => {
    setSelectedAlbums(null);
  }, []);
  
return <View>{selectedAlbums ? 
  <FotoDetails/> :  <ListaDeAlbumes />}</View>;
};

export default HomeScreen;
