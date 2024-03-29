import React from 'react';
import { render } from 'react-dom';
import { FirebaseContext } from './context/firebase';
import App from './app';
import { GlobalStyles } from './global-styles';

import { firebase } from './lib/firebase.prod';

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById(`root`)
);
