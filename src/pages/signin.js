import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  // check from input element as valid
  // email & password

  return (
    <>
      <HeaderContainer>
        <Form>
          <Frame.Title>Sign In</Frame.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit />
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
