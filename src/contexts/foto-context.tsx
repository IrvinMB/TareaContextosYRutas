import axios from 'axios';
import React, {createContext, useContext, useMemo, useState} from 'react';
import IFoto from '../models/IFoto';
import { useAlbumes } from './album-context';

export default interface FotosContextProps {
  lasFotos: IFoto[];
  setFotoDetail: (fotos: IFoto[]) => void;
  fetchFotosContext: () => Promise<void>;
  setSelectedAlbums:(album: number | null) => void;
}

const FotosContext = createContext<FotosContextProps>({
  lasFotos: [],
  setFotoDetail: () => {},
  fetchFotosContext: () => Promise.resolve(), 
  setSelectedAlbums: () =>{},
 
});

export const FotoProvider: React.FC = ({children}) => {
  const [lasFotos, setFotoDetail] = useState<IFoto[]>([]);
  const {selectedAlbums,setSelectedAlbums} = useAlbumes();
  const [selectedFoto, setSelectedFoto] = useState<number | null>(null);

  const fetchFotosContext = async () => {
    try {
      const fotosDatos = await axios.get(
        'https://jsonplaceholder.typicode.com/photos?albumId='+selectedAlbums,
      );
      setFotoDetail(fotosDatos.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = useMemo(()=>{
      return {lasFotos, setFotoDetail,fetchFotosContext,selectedFoto,setSelectedFoto , selectedAlbums,setSelectedAlbums};
  },[lasFotos, setFotoDetail, fetchFotosContext,selectedFoto, setSelectedFoto,selectedAlbums,setSelectedAlbums ]);
  return <FotosContext.Provider value={val}>{children}</FotosContext.Provider>;
};
export const useFotos = () => useContext(FotosContext);
