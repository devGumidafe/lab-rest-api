import { graphQLClient } from 'core/api';
import { gql } from 'graphql-request';
import { CharacterCollectionEntityApi } from './character-collection.api-model';
interface GetCharacterCollectionResponse {
  characters: CharacterCollectionEntityApi
}

export const getCharacterCollection = async (): Promise<CharacterCollectionEntityApi> => {
  const query = gql`
  query {
    characters(page:1) {
    results {
      id
      name
      image
      status
      species
      gender
      created
      }
    }
  }`;

  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(
    query
  );

  return characters;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {

  return true;
};
