import axios from 'axios';
import React, {createContext, useContext, useMemo, useState} from 'react';
import IAlbum from '../models/IAlbum';

export default interface AlbunContextProps {
  albums: IAlbum[];
  setAlbum: (albums: IAlbum[]) => void;
  selectedAlbums: number | null;
  setSelectedAlbums:(album: number | null) => void;
  fetchAlbumContext: () => Promise<void>;
}

const AlbumContext = createContext<AlbunContextProps>({
  albums: [],
  setAlbum: () => {},
  selectedAlbums: null,
  setSelectedAlbums: () =>{},
  fetchAlbumContext: () => Promise.resolve(),
});

export const AlbumProvider: React.FC = ({children}) => {
  const [albums, setAlbum] = useState<IAlbum[]>([]);
  const [selectedAlbums, setSelectedAlbums] = useState<number | null>(null);
  const fetchAlbumContext = async () => {
    try {
      const albumes = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );
      setAlbum(albumes.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = useMemo(()=>{
      return {albums, setAlbum,selectedAlbums,setSelectedAlbums ,fetchAlbumContext};
  },[albums, setAlbum, selectedAlbums, setSelectedAlbums, fetchAlbumContext]);

  return <AlbumContext.Provider value={val}>{children}</AlbumContext.Provider>;
};
export const useAlbumes = () => useContext(AlbumContext);