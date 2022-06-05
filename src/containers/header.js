import React from 'react';
import Header from '../components/header';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SING_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
