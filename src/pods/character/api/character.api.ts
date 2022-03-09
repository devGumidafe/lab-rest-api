import { gql } from 'graphql-request';
import { CharacterEntityApi } from './character.api-model';
import { graphQLClient } from 'core/api';
interface GetCharacterResponse {
  character: CharacterEntityApi
}

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const query = gql`
query {
  character(id: ${id}) {
    id
    name
    image
    status
    species
    gender
    created
  }
}`;

  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  );

  return character;
}

export const saveCharacter = async (character: CharacterEntityApi): Promise<boolean> => {
  return true;
};
