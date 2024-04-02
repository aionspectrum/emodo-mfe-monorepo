import SignIn from './components/SignIn';

function App() {
  const handleSignInSubmit = (username: string, password: string) => {
    console.log('App Submited: ', { username, password });
  };

  return (
    <>
      <SignIn onSubmit={handleSignInSubmit} />
    </>
  );
}

export default App;
