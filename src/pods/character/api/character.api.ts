import { CharacterEntityApi } from './character.api-model';
import axios from 'axios';

const apiUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const { data } = await axios.get(`${apiUrl}${id}`);
  return data;
};

export const saveCharacter = async (character: CharacterEntityApi): Promise<boolean> => {
  return true;
};
