import { FC, useState } from 'react';
import { Button, Form, Input, Label } from '../UI';

export interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log('username:', username);
  console.log('password:', password);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('\n');
    console.log('LoginForm Submitted:', { username, password });
    onSubmit(username, password);
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
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
