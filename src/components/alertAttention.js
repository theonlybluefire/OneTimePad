//imports
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

const AlertAttention = () => {
    const [showAlert, setShowAlert] = useState(true)
    if(showAlert) {
        return (
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible data-bs-theme="dark">
            <Alert.Heading>Attention</Alert.Heading>
            <p>
            <strong>This algorithmen does not include spaces and it's not case sensitive.</strong>
            <br/>
            I am not a security expert. Everything I do is for the purpose of developing new skills. I try to maintain this project. If you don't trust me, all the source code is publicly available on GitHub. I take no responsibility for any problems with this algorithm. I can't estimate the security, but I do my best
            </p>
            <hr />
            <p className="mb-0">
                <a href="https://github.com/theonlybluefire/OneTimePad">All the source code</a>
            </p>
          </Alert>
        )
    }
    else {
        return (
            <div class="text-center">
                <p>Stay cautious</p>
            </div>
        )
    }

}
export default AlertAttention

