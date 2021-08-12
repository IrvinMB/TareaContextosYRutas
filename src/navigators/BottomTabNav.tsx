import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListaDeAlbumes from '../componets/organisms/ListaDeAlbumes';
import FotoDetails from '../componets/organisms/FotosDetalle';
import HomeScreen from '../screens/HomeScreen';

const BottomTabNav = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="ListaDeAlbumes" component={HomeScreen} />
        <Screen name="FotoDetails" component={FotoDetails} />
      </Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;