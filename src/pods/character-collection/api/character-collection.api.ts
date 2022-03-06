import axios from 'axios';
import { CharacterCollectionEntityApi } from './character-collection.api-model';

const apiUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterCollectionEntityApi> => {
  const { data } = await axios.get<CharacterCollectionEntityApi>(apiUrl);
  return data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {

  return true;
};
