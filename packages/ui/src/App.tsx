import { useState } from 'react';

import { Text, Button } from './components/UI';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>UI Components</Text>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
