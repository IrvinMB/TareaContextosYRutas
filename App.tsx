import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { AlbumProvider } from './src/contexts/album-context';
import { FotoProvider } from './src/contexts/foto-context';
import BottomTabNav from './src/navigators/BottomTabNav';
// import { PublicacionesProvider } from './src/contexts/publicaciones-context';
import HomeScreen from './src/screens/HomeScreen';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import * as reducers from './src/store/reducers'
// import Home from './src/components/screens/Home';
// import thunk from 'redux-thunk';

// const store = createStore(combineReducers(reducers), applyMiddleware(compose(thunk)));

const App = () => {

  return (
 
       <AlbumProvider>
         <FotoProvider>
            {/* <SafeAreaView> */}
            {/* <HomeScreen />    */}
                      
{/*        
            </SafeAreaView> */}
            <BottomTabNav />
         </FotoProvider>    
       </AlbumProvider>

  );
};

export default App;
