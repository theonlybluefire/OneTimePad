import * as bootstrap from 'bootstrap';
import { useEffect, useState, useRef } from 'react';
function ShowToast({message}) {


    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

 
  return (
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">

        <strong class="me-auto">System</strong>
        <small>Now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {message}
      </div>
    </div>
  </div>
  )
}
export default ShowToast
