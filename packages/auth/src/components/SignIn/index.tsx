import { FC } from 'react';
import styled from 'styled-components';
import LoginForm, { LoginFormProps } from './LoginForm';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export interface SignInProps {
  onSubmit: () => void;
}

const SignIn: FC<LoginFormProps> = (props) => {
  const { onSubmit } = props;
  return (
    <Wrapper>
      <div>Login Form on Sign In page...</div>
      <LoginForm onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default SignIn;
