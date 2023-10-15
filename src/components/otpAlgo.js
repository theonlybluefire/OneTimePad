const input = (phrase, key) => {
    var lengthPhrase = phrase.length
    var numbersPhrase = []
    var lenghtKey = key.length
    var numbersKey = []
    var returnArray = []
    function letterToNumber(letter) {
        var asciiValue = letter.toUpperCase().charCodeAt(0);
        return asciiValue - 64;
      }
    for(let i=0;i<lengthPhrase;i++) {
        let number = letterToNumber(phrase[i]);
        numbersPhrase.push(number)
    }
    for(let i=0;i<lenghtKey;i++) {
        let number = letterToNumber(key[i]);
        numbersKey.push(number)
    }
    //addition
    for(let i=0;i<lengthPhrase;i++) {
        returnArray.push(numbersKey[i]+numbersPhrase[i])
    }
}