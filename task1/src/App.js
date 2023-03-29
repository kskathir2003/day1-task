 /* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const dept="ECE";
  return (
    <div>
      <header className="App-header">
      <h1>
          React sample app
        </h1>
        <button onClick={alert(['Button clicked'])}>CLICK HERE</button>
        {/* <button onClick={window['array_function']}>Click the button</button> */}
      </header>
    
      {/* <div>
          <h1>Welcome to {dept} , SKCET</h1>
      </div> */}
      
    </div>
  );
}

export default App;