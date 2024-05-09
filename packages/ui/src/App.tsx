import { useState } from 'react';

import { Text, Button, InputField } from './components/UI';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ComponentWrapper = styled.div`
  padding: 30px;
`;

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <Wrapper>
      <Text>UI Components</Text>
      <div>
        <ComponentWrapper>
          <Text>Button:</Text>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </ComponentWrapper>

        <ComponentWrapper>
          <Text>InputField: value = {inputValue}</Text>
          <InputField
            aria-label="username-input"
            label="Username"
            value={inputValue}
            onChange={(newInput) => setInputValue(newInput)}
          />
        </ComponentWrapper>
      </div>
    </Wrapper>
  );
}

export default App;
