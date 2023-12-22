//imports
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
const InformationComponent = () => {
    return (
        <div>
            <Alert variant="danger">
            <Alert.Heading>Attention</Alert.Heading>
            <p>
                I'm not a security export. All I do is for the purpose of developing new skills. I'm trying to maintain this project.
                If you do not trust me, all the source code is publicly available on github. 
                I'm not making myself responsible for issues with this algorithmen. I cannot estimate the security of it, but I'm trying my best.
            </p>
            <hr />
            <p className="mb-0">
            <a href="https://github.com/theonlybluefire/OneTimePad">All the source code</a>

            </p>
        </Alert>
        <br/>
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
export default InformationComponent
