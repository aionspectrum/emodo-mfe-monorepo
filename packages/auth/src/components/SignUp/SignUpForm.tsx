import { FC, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Form, InputField, Text } from 'ui/UI';

export const SIGN_IN_BUTTON_NAME = '...Sign In';

const Inline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export interface IRegistrationInput {
  username: string;
  password: string;
  email: string;
}

export interface SignUpFormProps {
  onSubmit?: (input: IRegistrationInput) => void;
  onCancel?: () => void;
  pathToLogIn: string;
}

const SignUpForm: FC<SignUpFormProps> = ({
  onSubmit,
  onCancel,
  pathToLogIn,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) onSubmit({ username, password, email });
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
        aria-label="email-input"
        label="e-mail"
        value={email}
        onChange={(newEmail: string) => setEmail(newEmail)}
      />
      <InputField
        aria-label="password-input"
        label="Password"
        type="password"
        value={password}
        onChange={(newPassword: string) => setPassword(newPassword)}
      />
      <InputField
        aria-label="confirm-password-input"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(newPassword: string) => setConfirmPassword(newPassword)}
      />
      <Wrapper>
        <Text color="secondary">
          Not registered yet?
          <Link to={pathToLogIn}>{SIGN_IN_BUTTON_NAME}</Link>
        </Text>
      </Wrapper>
      <Inline>
        <Button emphasis="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button emphasis="primary" type="submit">
          Register
        </Button>
      </Inline>
    </Form>
  );
};

export default SignUpForm;
