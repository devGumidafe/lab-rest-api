import { createFormikValidation } from '@lemoncode/fonk-formik';
import { gql, GraphQLClient } from 'graphql-request';
import { CharacterCollectionEntityApi } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/graphql';
const graphQLClient = new GraphQLClient(url);

interface GetCharacterCollectionResponse {
  characters: CharacterCollectionEntityApi[]
}


export const getCharacterCollection = async (): Promise<CharacterCollectionEntityApi[]> => {
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
