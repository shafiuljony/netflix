import React, { Children } from 'react';
import Header from '../components/header';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo />
        <Header.Button />
      </Header.Frame>
      {Children}
    </Header>
  );
}
