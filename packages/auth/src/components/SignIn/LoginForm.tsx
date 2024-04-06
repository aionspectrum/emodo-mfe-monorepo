import { FC, useState } from 'react';
import styled from 'styled-components';
import { Button, Form, Input, Label } from '../UI';

const Inline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export interface LoginFormProps {
  onSubmit?: (username: string, password: string) => void;
  onCancel?: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) onSubmit(username, password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Username
        <Input
          type="text"
          aria-label="username-input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          aria-label="password-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Label>
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
