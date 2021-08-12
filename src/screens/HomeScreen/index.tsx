import React, { useState } from 'react';
import {Text, View} from 'react-native';
import { useAlbumes } from '../../contexts/album-context';
import ListaDeAlbumes from '../../componets/organisms/ListaDeAlbumes';
import FotoDetails from '../../componets/organisms/FotosDetalle';
import IFoto from '../../models/IFoto';
import { IState } from '../../models/IState';

const HomeScreen: React.FC = () => {
  const selectedAlbmes = useAlbumes();
   console.log(selectedAlbmes.selectedAlbums);
return <View>{selectedAlbmes.selectedAlbums ? 
  <FotoDetails/> :  <ListaDeAlbumes />}</View>;
};

export default HomeScreen;
