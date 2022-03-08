import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi,
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  picture: character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  bestSentences: character.bestSentences,
  created: mapDateFromApiVm(character.created.toString())
});

export const mapDateFromApiVm = (date: string) => {
  const dateToDateFormat = new Date(date);
  const day = dateToDateFormat.getDate();
  const year = dateToDateFormat.getFullYear();
  const month = dateToDateFormat.toLocaleDateString('es-ES', { month: 'short' });

  return `${day}-${month.toUpperCase()}-${year}`;
}
