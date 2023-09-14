import { useState } from 'react';
import './App.css';
import Button from './Button';
import OtherButton from './OtherButton';

function App() {

  const handleClick = () => {}

  return (
    <>
      <Button backgroundColor='blue' fontSize={30} padding={[20, 30, 40]}/>
      <OtherButton 
        style={{
          backgroundColor: 'red',
          fontSize: 30,
          color: 'white',
          padding: "1rem 2rem",
          borderRadius: '1px solid black'
        }}
        handleClick={handleClick}
      >Click Me!</OtherButton>
    </>
  )
}

export default App
