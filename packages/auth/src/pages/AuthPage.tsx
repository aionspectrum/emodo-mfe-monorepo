// import React, { lazy, Suspense, useState, useEffect } from 'react';
// import { createBrowserHistory } from 'history';
import { FC } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import SignIn, { ILoginInput } from '../components/SignIn';
// import SignUp from '../components/SignUp/SignUp';
import { SignUp, IRegistrationInput } from '../components/SignUp';
import { LOGIN_PATH, SIGNUP_PATH } from '../constants/routes';

export interface IAuthProps {
  onLoginSubmit?: (input: ILoginInput) => void;
  onRegistrationSubmit?: (input: IRegistrationInput) => void;
  onCancel?: () => void;
  authPath?: string;
}

const AuthPage: FC<IAuthProps> = ({
  onLoginSubmit,
  onRegistrationSubmit,
  onCancel,
  authPath,
}) => {
  const handleSignInSubmit = (input: ILoginInput) => {
    const { username, password } = input;
    console.log('LoginForm Submited: ', { username, password });
    if (onLoginSubmit) onLoginSubmit({ username, password });
  };

  const handleCancel = () => {
    console.log('Auth Canceled');
    if (onCancel) onCancel();
  };

  const handleRegistrationSubmit = (data: IRegistrationInput) => {
    console.log('submitted: ', data);
    if (onRegistrationSubmit) onRegistrationSubmit(data);
  };

  // return (
  //   <>
  //     <SignIn onSubmit={handleSignInSubmit} onCancel={handleSignInCancel} />
  //   </>
  // );

  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route
          path=""
          element={
            <SignIn
              onSubmit={handleSignInSubmit}
              onCancel={handleCancel}
              pathToSignUp={authPath + SIGNUP_PATH}
            />
          }
        />
        <Route
          path={LOGIN_PATH}
          element={
            <SignIn
              onSubmit={handleSignInSubmit}
              onCancel={handleCancel}
              pathToSignUp={authPath + SIGNUP_PATH}
            />
          }
        />
        <Route
          path={SIGNUP_PATH}
          element={
            <SignUp
              onSubmit={handleRegistrationSubmit}
              onCancel={handleCancel}
              pathToLogIn={authPath + LOGIN_PATH}
            />
          }
        />
      </Routes>
      {/* </Router> */}
    </>
  );
};

export { type ILoginInput } from '../components/SignIn';
export { type IRegistrationInput } from '../components/SignUp';
export default AuthPage;
