import { FC, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Form, InputField, Text } from 'ui/UI';

export const SIGN_UP_BUTTON_NAME = '...Sign Up';

const Inline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export interface ILoginInput {
  username: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit?: (input: ILoginInput) => void;
  onCancel?: () => void;
  pathToSignUp: string;
}

const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  onCancel,
  pathToSignUp,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) onSubmit({ username, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        aria-label="username-input"
        label="Username"
        value={username}
        onChange={(newUsername: string) => setUsername(newUsername)}
      />
      <InputField
        aria-label="password-input"
        label="Password"
        value={password}
        onChange={(newPassword: string) => setPassword(newPassword)}
      />
      <Wrapper>
        <Text color="secondary">
          Not registered yet?
          {/* <Link to={SIGNUP_PATH}>{SIGN_UP_BUTTON_NAME}</Link> */}
          <Link to={pathToSignUp}>{SIGN_UP_BUTTON_NAME}</Link>
        </Text>
      </Wrapper>
      <Inline>
        <Button emphasis="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button emphasis="primary" type="submit">
          Login
        </Button>
      </Inline>
    </Form>
  );
};

export default LoginForm;
