
import './App.css';
import './index.css'
import generateKey from './components/randomGenerator';

//others
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { useState } from 'react';
import { Algoinput } from'./components/otpAlgo.js'
import ShowToast from './components/Toast.js';
import AccordionInfo from './components/accordionInfo.js';
import AlertAttention from './components/alertAttention.js';

function App() {
  //define some variables
  const [encryptedMessageText, setEncrytedMessageText] = useState('')
  const [keyDisplay, setKeyDisplay] = useState('');
  const [MessageText, setMessageText] = useState('');
  const [ToastSection, setToastSection] = useState('');

  const copyToCliboard = (value) => {
    navigator.clipboard.writeText(value);
    let message = value+' wurde in die Zwischenablage kopiert'
    setToastSection(<ShowToast message={message} />)
    setTimeout(() => {
      setToastSection(null)
    },2000)
  }
  const handleMessageChange = (event) => {
    if(event.target.value==='') { //clear the encrypted message text if the message text is empty 
      setEncrytedMessageText('');
    }
    setMessageText(event.target.value);
    let key = generateKey(event.target.value); //generate key
    let keyElements = '';
    for(let i=0;i<key.length;i++) { //key is currently this :['a','b','c']. This function puts it all together
      keyElements += key[i];
    }
    setKeyDisplay(keyElements)
  }

  const encrypt = () => { //encrypt button
    var encryptedMessage = ''
    var encryptedArray = Algoinput(MessageText,keyDisplay,'encrypt');
    for(let i=0;i<encryptedArray.length;i++) { //put the things together (like in the handleMessageChange section)
        encryptedMessage += encryptedArray[i];
    }
    setEncrytedMessageText(encryptedMessage)
    copyToCliboard(encryptedMessage) //copy cliboard
  } 

  const handleCryptedMessageChange = (event) => {
    setEncrytedMessageText(event.target.value);
  }

  const handleKeyChange = (event) => {
    setKeyDisplay(event.target.value)
  }

  const decrypt = () => { //decrypt button
    var decryptedMessage = ''
    var decryptedArray = Algoinput(encryptedMessageText,keyDisplay,'decrypt');
    for(let i=0;i<decryptedArray.length;i++) { //put the things together (like in the handleMessageChange section)
      decryptedMessage += decryptedArray[i];
    }
    setMessageText(decryptedMessage)
  }
  return (
    <div>
      <br/>
      <h1 class="text-center">One Time Pad</h1>
      <br/>
      <div class="text-center">
        <input value={keyDisplay} onChange={handleKeyChange}></input>
        <button class="btn btn-secondary" onClick={()=> {
          copyToCliboard(keyDisplay)
        }}>copy key</button>
      </div>
      <br/>
      <div class="resultBox">
        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Your text goes here" id="floatingTextarea2Disabled" value={MessageText} onChange={handleMessageChange}></textarea>
          <label for="floatingTextarea2Disabled">Message</label>
        </div>
      </div>
      <div class="resultBox">
        <div class="form-floating mb-3">
          <textarea class="form-control" id="floatingTextarea2Disabled" placeholder="EncryptedText" value={encryptedMessageText} onChange={handleCryptedMessageChange}></textarea>
          <label for="floatingTextarea2Disabled">Encrypted Message</label>
        </div>
      </div>
      <div class="text-center gap-2">
        <buton class="btn btn-danger" onClick={encrypt}>Encrypt</buton>
        <buton class="btn btn-success" onClick={decrypt}>Decrypt</buton>
      </div>
        <div class="toast-section">
          {ToastSection}
        </div>
        <br/>
        <AlertAttention/>
        <br/>
        <AccordionInfo/>
    </div>
  );
}

export default App;
