import { FC } from 'react';
import LoginForm, { LoginFormProps } from './LoginForm';

export interface SignInProps {
  onSubmit: () => void;
}

const SignIn: FC<LoginFormProps> = (props) => {
  const { onSubmit } = props;
  return (
    <>
      <div>Login Form on Sign In page...</div>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};

export default SignIn;
