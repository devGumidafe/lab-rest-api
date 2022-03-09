import { CharacterEntityApi } from './character.api-model';
import axios from 'axios';

const apiUrl = '/api/characters';;

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const { data } = await axios.get(`${apiUrl}/${id}`);
  return data;
};

export const saveBestSentences = async (character: CharacterEntityApi): Promise<boolean> => {
  await axios.put(`${apiUrl}/${character.id}`, character);
  return true;
};
