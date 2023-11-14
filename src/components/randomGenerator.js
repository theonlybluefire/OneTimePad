const generateKey = (phrase) => {
    var lengthPhrase = phrase.length;
    console.info('Generating Key ....');
    var key = [];
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for(let i=0; i<lengthPhrase; i++) {
        let randomNumber = Math.random() * 25
        randomNumber = Math.round(randomNumber);
        console.info('Random number is',randomNumber,'Entry Point :',i)
        key.push(letters[randomNumber])
    }
    console.info('Key generated :',key)
    return key
}

export default generateKey;