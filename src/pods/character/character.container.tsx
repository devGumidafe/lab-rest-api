import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, CharacterEntityVm } from './character.vm';
import { mapFromApiToVm } from './character.mappers';
import { CharacterDetailComponent } from './characterDetail.component';
import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

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
      <CharacterDetailComponent character={character} />
    </>
  );
};
