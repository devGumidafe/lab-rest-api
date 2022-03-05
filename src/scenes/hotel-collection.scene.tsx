import * as React from 'react';
import { AppLayout } from 'layouts';
import { HotelCollectionContainer } from 'pods/hotel-collection';
import { CharacterCollectionContainer } from 'pods/character-collection';

export const HotelCollectionScene = () => (
  <AppLayout>
    {/* <HotelCollectionContainer /> */}
    <CharacterCollectionContainer/>
  </AppLayout>
);
