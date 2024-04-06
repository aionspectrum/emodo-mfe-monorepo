import SignIn from './components/SignIn';

function App() {
  const handleSignInSubmit = (username: string, password: string) => {
    console.log('LoginForm Submited: ', { username, password });
  };

  const handleSignInCancel = () => {
    console.log('LoginForm Canceled');
  };

  return (
    <>
      <SignIn onSubmit={handleSignInSubmit} onCancel={handleSignInCancel} />
    </>
  );
}

export default App;
