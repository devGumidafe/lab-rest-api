import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CharacterEntityVm } from '../character.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card style={{width:'80%'}}>
      <CardHeader title={character.name}/>
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
        </div>
      </CardContent>
    </Card>
  );
};
