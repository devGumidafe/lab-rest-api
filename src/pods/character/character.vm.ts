export interface CharacterEntityVm {
  id: string,
  name: string,
  status: string,
  species: string,
  type?: string,
  gender: string,
  picture: string,
  created: string
}

const randomID = Math.random().toString(36).substring(2);

export const createEmptyCharacter = (): CharacterEntityVm => ({
  id: randomID,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  picture: '',
  created: new Date().toDateString()
});

