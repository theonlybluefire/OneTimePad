const Algoinput = () => {
    const phrase = 'Hell'

    const key = 'bref'
    var lengthPhrase = 5
    var numbersPhrase = []
    var lenghtKey = 5
    var numbersKey = []
    var returnArray = []
    console.warn(lengthPhrase,lenghtKey)
    function letterToNumber(letter) {
        var asciiValue = letter.toUpperCase().charCodeAt(0);
        return asciiValue - 64;
      }
    function NumberToLetter(number) {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let letter = alphabet[number - 1];
        return letter
    }
    console.info('Algorithmen Test 1 -> letter to Number')
    for(let i=0;i<lengthPhrase;i++) {
        console.log('modulo Test 1',i)
        let number = letterToNumber(phrase[i]);
        numbersPhrase.push(number)
    }
    console.info('Algorithmen Test 2 -> letter to Number')
    for(let i=0;i<lenghtKey;i++) {
        console.log('modulo Test 2',i)
        let number = letterToNumber(key[i]);
        numbersKey.push(number)
    }
    //addition
    console.info('Algorithmen Test 3 -> Addition')
    for(let i=0;i<lengthPhrase;i++) {
        console.log('modulo Test 3',i)
        returnArray.push(numbersKey[i]+numbersPhrase[i])
    }
    console.info('Algorithmen Test 4 -> modulo')
    //modulo
    for(let i=0;i<lengthPhrase;i++) {
        console.log('modulo Test 4',i)
        returnArray[i] = returnArray[i] % 26
        //numberTOLetter
        returnArray[i] = NumberToLetter(returnArray[i]);
        
    }
    console.table(returnArray)
    return (
        <div>
            {returnArray.map((n) => {
                <p>{n}</p>
            })}
        </div>
    )

}
export default Algoinput