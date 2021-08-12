import styled from '@emotion/native';
import React, {FC} from 'react';
import {Text} from 'react-native';
import { useAlbumes } from '../../../contexts/album-context';
import IAlbum from '../../../models/IAlbum';

export interface AlbumListItemProps {
  Album: IAlbum;
  index: number;
}

const AlbumListItem:FC<AlbumListItemProps> = ({Album, index}) => {
  const {setSelectedAlbums} = useAlbumes();
  const onPress = () => {
    setSelectedAlbums(index);
  };

  return (
    <ItemContainer onPress={onPress}>
      <Text>
        {++index}. {Album.title}
      </Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity`
  background-color: hsl(220.88888888888889, 84.90566037735847%, 68.82352941176471%);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  padding: 8px 12px;
  margin: 4px 0;
  height:65px;
`;

export default AlbumListItem;