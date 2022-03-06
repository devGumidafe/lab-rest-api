import React from 'react';
import { CharacterEntityVm } from './character.vm';
import { CharacterCard } from './components/character-card.component';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterDetailComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return <CharacterCard character={character} />;
};
