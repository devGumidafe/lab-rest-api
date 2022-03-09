import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;

  return (
    <Card onClick={() => onEdit(character.id)} style={{ cursor: 'pointer' }}>
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

          {character.bestSentences && (
            <Typography variant="subtitle1" gutterBottom>
              <strong>Best Sentences:</strong> {character.bestSentences}
            </Typography>
          )}

          <Typography variant="subtitle1" gutterBottom>
            <strong>Created:</strong> {character.created}
          </Typography>
        </div>
      </CardContent>
      {/* <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};
