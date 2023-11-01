const generateKey = (phrase) => {
    var lengthPhrase = phrase.length-1;
    console.info('Generating Key ....')
    var key = [];
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for(let i=0; i<lengthPhrase; i++) {
        let randomNumber = Math.random() * letters.length
        randomNumber = Math.round(randomNumber);
        key.push(letters[randomNumber])
    }
    console.log(key)
    return key
}

export default generateKey;