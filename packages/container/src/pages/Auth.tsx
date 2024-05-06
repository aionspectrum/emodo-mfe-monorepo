import { FC } from 'react';
import Authentication from 'auth/Authentication';
// import Authentication, {
//   IAuthProps,
//   IRegistrationInput,
//   ILoginInput,
// } from 'auth/Authentication';
import { AUTH } from '../constants/routes';

const AuthPage: FC = () => {
  // const handleLoginSubmit = (data: ILoginInput) => {
  //   console.log('containerapp : LoginForm Submited: ', data);
  // };

  // const handleRegistrationSubmit = (data: IRegistrationInput) => {
  //   console.log('containerapp : SignUpForm Submited: ', data);
  // };

  const handleCancel = () => {
    console.log('container app: Login / Registration Canceled');
  };

  return (
    <Authentication
      authPath={AUTH}
      // onLoginSubmit={handleLoginSubmit}
      // onRegistrationSubmit={handleRegistrationSubmit}
      onLoginSubmit={() => console.log('onLoginSubmit')}
      onRegistrationSubmit={() => console.log('onRegistrationSubmit')}
      onCancel={handleCancel}
    />
  );
};

export default AuthPage;
