export interface CharacterEntityVm {
  id: string,
  name: string,
  status: string,
  species: string,
  gender: string,
  picture: string,
  bestSentences: string,
  created: string,
}


const randomID = Math.random().toString(36).substring(2);

export const createEmptyCharacter = (): CharacterEntityVm => ({
  id: randomID,
  name: '',
  status: '',
  species: '',
  gender: '',
  picture: '',
  bestSentences: '',
  created: new Date().toDateString()
});

