import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

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

export const mapFromVmToApi = (character: viewModel.CharacterEntityVm): apiModel.CharacterEntityApi =>
(({
  ...character,
  image: character.picture,
  bestSentences: character.bestSentences,
} as unknown) as apiModel.CharacterEntityApi);
