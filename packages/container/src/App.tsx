import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AUTH } from './constants/routes';

const HomeLazy = lazy(() => import('./pages/Home'));
const AuthLazy = lazy(() => import('./pages/Auth'));

function App() {
  return (
    <>
      <h1>Container App (host of micro frontends)</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLazy />} />
          <Route path={`${AUTH}/*`} element={<AuthLazy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
