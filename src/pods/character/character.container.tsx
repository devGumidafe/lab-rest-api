import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, CharacterEntityVm } from './character.vm';
import { mapFromApiToVm, mapFromVmToApi } from './character.mappers';
import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { CharacterCard } from './components/character-card.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterEntityVm>(
    createEmptyCharacter()
  );

  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: CharacterEntityVm) => {
    const apiCharacter = mapFromVmToApi(character);
    const success = await api.saveBestSentences(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save Best Sentences');
    }
  };

  return (
    <>
      <Button
        href="/#/characters"
        startIcon={<ArrowBack />}
        style={{ marginBottom: '1rem' }}
        color="primary"
      >
        Back to home
      </Button>
      <CharacterCard character={character} onSave={handleSave} />
    </>
  );
};
