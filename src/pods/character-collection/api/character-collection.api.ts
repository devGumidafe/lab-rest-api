import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const apiUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi> => {
  const { data } = await axios.get<CharacterEntityApi>(apiUrl);
  return data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {

  return true;
};
