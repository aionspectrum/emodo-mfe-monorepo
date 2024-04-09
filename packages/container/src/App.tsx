import SignIn from 'auth/SignIn';

function App() {
  const handleSignInSubmit = (username: string, password: string) => {
    console.log('containerapp : LoginForm Submited: ', { username, password });
  };

  const handleSignInCancel = () => {
    console.log('container app: LoginForm Canceled');
  };

  return (
    <>
      <h1>Container App (host of micro frontends)</h1>
      <SignIn onSubmit={handleSignInSubmit} onCancel={handleSignInCancel} />
    </>
  );
}

export default App;
