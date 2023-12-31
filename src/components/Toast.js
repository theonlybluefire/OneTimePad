import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';

function ShowToast({ message }) {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => {
    setShowA(!showA)
  };

  return (

      <Col  class="toast-container" className="toast-container position-fixed bottom-0 end-0 p-3" data-bs-theme="dark">
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