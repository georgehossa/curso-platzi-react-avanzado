import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { Logo } from '../components/Logo';

const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)

export default App;