// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // return (
  //   <>
  //     {/* <SignIn onSubmit={handleSignInSubmit} onCancel={handleSignInCancel} /> */}
  //     <Router>
  //       <AuthPage />
  //     </Router>
  //   </>
  // );

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthPage />} />
        {/* <Route path="/auth/*" element={<AuthPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
