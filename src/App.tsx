import { useState } from 'react';
import './App.css';
import Button from './Button';
import OtherButton from './OtherButton';

function App() {

  const [ count, setCount ] = useState<number>(0);

  const handleClick = (test: string): number => {
    return 5;
  }

  const icon = <i></i>; //JSX Element.

  return (
    <>
      <Button backgroundColor='blue' fontSize={30} padding={[20, 30, 40]}/>
      <OtherButton
        count={count}
        style={{
          backgroundColor: 'red',
          fontSize: 30,
          color: 'white',
          padding: "1rem 2rem",
          borderRadius: '1px solid black'
        }}
        handleClick={() => handleClick('texto') }
      >{icon}</OtherButton>
    </>
  )
}

export default App
