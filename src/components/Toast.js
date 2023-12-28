import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';

function ShowToast({ message }) {
  if(sessionStorage.getItem('showedWarning')==true) {
    console.log('lol');
    setShowA(!showA)
  }
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => {
    sessionStorage.setItem('showedWarning',true)
    setShowA(!showA)
  };

  return (

      <Col  class="toast-container" className="toast-container position-fixed bottom-0 end-0 p-3">
        <Toast show={showA} onClose={toggleShowA} animation={true}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">System</strong>
            <small>Jetzt</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>

  );
}
export default ShowToast;