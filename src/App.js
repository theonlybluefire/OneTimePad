import logo from './logo.svg';
import './App.css';
import './index.css'
import generateKey from './components/randomGenerator';
//others
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { useEffect, useState } from 'react';
import Algoinput from './components/otpAlgo';


function App() {
  const [keyBackup, setKeyBackup] = useState('')
  const [encryptedMessage, setEncrytedMessage] = useState('')
  const [keyDisplay, setKeyDisplay] = useState('');
  const [text, setText] = useState('')

  //handle Input
  const handleChange = (event) => {
    setText(event.target.value)
    let key = generateKey(event.target.value);
    console.log('transfer key',key,'into Backup key function')
    setKeyBackup(key) //übergabe in backup key arugment
    console.log('KeyBackup',keyBackup)
    var keyElements = key.map((keyValue, index) => (
      <span key={index}>{keyValue}</span>
    ));
    setKeyDisplay(keyElements)
  }

    
  
  const encrypt = () => {
    var encryptedMessage = ''
    var encryptedArray = Algoinput(text,keyBackup.join(''));
    for(let i=0;i<encryptedArray.length;i++) {
        encryptedMessage += encryptedArray[i];
    }
    setEncrytedMessage(encryptedMessage)
    copyToCliboard(keyBackup.join(''))
  } 
  const copyToCliboard = (value) => {
  navigator.clipboard.writeText(value);
  alert("Copied Key to Cliboard: " + value);
  }
  return (
    <div>
      <br/>
      <h1 class="text-center">One Time Pad</h1>
      <br/>
      <div class="text-center">
        <p class="bold">{keyDisplay}</p>
      </div>
      <div class="resultBox">
        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Your text goes here" id="floatingTextarea2Disabled" onChange={handleChange}>{text}</textarea>
          <label for="floatingTextarea2Disabled">Message</label>
        </div>
      </div>
      <div class="resultBox">
        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" value={encryptedMessage}></textarea>
          <label for="floatingTextarea2Disabled">Comments</label>
        </div>
      </div>
      <buton class="btn btn-danger" onClick={encrypt}>Encrypt</buton>
    </div>
  );
}

export default App;
