import { FC, useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          aria-label="username-input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          aria-label="password-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
