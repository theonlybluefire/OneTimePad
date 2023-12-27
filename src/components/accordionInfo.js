import Accordion from 'react-bootstrap/Accordion';
const AccordionInfo = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header>What's a One Time Pad</Accordion.Header>
                <Accordion.Body>
                    The One-Time Pad (OTP) is a encryption technique in cryptography. 
                    It is considered to be unbreakable, but it requires the use of a unique pre-shared key, which must be equal to the size of the message. 
                    In this technique, a plaintext is paired with a random secret key, also known as a one-time key.  
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>What does this website ?</Accordion.Header>
                <Accordion.Body>
                    Here you're able to give my algorithmen a text, which then gets encrypted by a random generated key. 
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default AccordionInfo