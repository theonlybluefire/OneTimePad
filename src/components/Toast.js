import * as bootstrap from 'bootstrap';
import { Toast } from 'bootstrap';
import { useEffect, useState, useRef } from 'react';
function ShowToast({message}) {
  var [toast, setToast] = useState(false);
  const toastRef = useRef();

  useEffect(() => {
      var myToast = toastRef.current
      var bsToast = bootstrap.Toast.getInstance(myToast)
      
      if (!bsToast) {
          // initialize Toast
          bsToast = new Toast(myToast, {autohide: false})
          // hide after init
          bsToast.hide()
          setToast(false)
      }
      else {
          // toggle
          toast ? bsToast.show() : bsToast.hide()
      }
  },[])
 
  return (
  <div className="py-2">
      <div className="toast position-absolute m-4" role="alert" ref={toastRef}>
          <div className="toast-body">
            {message}
          </div>
      </div>
  </div>
  )
}
export default ShowToast
