import React from 'react';
import Nav from './Nav';
import './App.css';
import Text from './components/text';

const App = () => {
  const newText = "Discover New Worlds"; 
  return (
    <div className="App">
      <Nav/>
      <Text content={newText}></Text>
    </div>
  );
};

export default App;
