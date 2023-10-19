import logo from './logo.svg';
import './App.css';
import './index.css'
import generateKey from './components/randomGenerator';
//others
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { useState } from 'react';
import Algoinput from './components/otpAlgo';


function App() {
const [keyDisplay, setKeyDisplay] = useState('Just type and see how your random key generates');
const [text, setText] = useState('')
//handle Input
const handleChange = (event) => {
  setText(event.target.value)
  let key = generateKey(event.target.value);
  const keyElements = key.map((keyValue, index) => (
    <span key={index}>{keyValue}</span>
  ));
  setKeyDisplay(keyElements)
}
  return (
    <div>
      <br/>
      <h1 class="text-center">One Time Pad</h1>
      <br/>
      <div class="text-center">
        <p class="bold">{keyDisplay}</p>
      </div>
      <div class="mb-3">
        <input class="form-control text-center" value={text} onChange={handleChange}></input>
      </div>
      <div class="resultBox">
        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled">Disabled textarea with some text inside</textarea>
          <label for="floatingTextarea2Disabled">Comments</label>
        </div>
      </div>
      <Algoinput phrase='test' key={keyDisplay}/>
    </div>
  );
}

export default App;
