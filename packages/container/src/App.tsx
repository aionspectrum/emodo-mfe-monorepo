import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Text } from 'ui/UI';

import { AUTH } from './constants/routes';

const HomeLazy = lazy(() => import('./pages/Home'));
const AuthLazy = lazy(() => import('./pages/Auth'));

function App() {
  return (
    <>
      <Text>Container App (host of micro frontends)</Text>
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
