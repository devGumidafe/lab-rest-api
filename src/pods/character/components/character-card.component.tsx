import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CharacterEntityVm } from '../character.vm';
import * as classes from './character-card.styles';
import { Button, CardActions, TextField } from '@material-ui/core';

interface Props {
  character: CharacterEntityVm;
  onSave: (character: CharacterEntityVm) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  const [bestSentences, setBestSentences] = React.useState('');

  React.useEffect(() => {
    setBestSentences(character.bestSentences);
  }, [character.bestSentences]);

  const onChangeBestSentences = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBestSentences(event.target.value);
  };

  const onSaveCharacter = () => {
    onSave({
      ...character,
      bestSentences,
    });
  };

  return (
    <Card style={{ width: '80%' }}>
      <CardHeader title={character.name} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.picture}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%', marginBottom: '1rem' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            <strong>Status:</strong> {character.status}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Species:</strong> {character.species}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Created:</strong> {character.created}
          </Typography>

          <TextField
            value={bestSentences}
            onChange={onChangeBestSentences}
            multiline
            label="Best Sentences"
            variant="filled"
            fullWidth
            rows={2}
            margin="normal"
          />
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={onSaveCharacter}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
};
