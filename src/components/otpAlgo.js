export const Algoinput = (phrase,key, option) => {
    var lengthPhrase = phrase.length
    var numbersPhrase = []
    var lenghtKey = key.length
    var numbersKey = []
    var returnArray = []
    function letterToNumber(letter) {
        var asciiValue = letter.toUpperCase().charCodeAt(0);
        return asciiValue - 65;
      }
    function NumberToLetter(number) {
        console.log('Number',number)
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let letter = alphabet[number];
        console.log('Returned Letter,',letter)
        return letter
    }
    if(option=='encrypt') {
        console.warn(lengthPhrase,lenghtKey)

        console.info('Algorithmen Test 1 -> letter to Number')
        for(let i=0;i<lengthPhrase;i++ || i==lengthPhrase) {
            console.log('modulo Test 1',i)
            let number = letterToNumber(phrase[i]);
            numbersPhrase.push(number)
            console.log('modulo Test 2',i)
            number = letterToNumber(key[i]);
            numbersKey.push(number)
        }
        //adition
        console.info('Algorithmen Test 3 -> Addition')
        for(let i=0;i<lengthPhrase;i++ || i==lengthPhrase) {
            console.log('modulo Test 3',i)
            returnArray.push(numbersKey[i]+numbersPhrase[i])
        }
        console.info('Algorithmen Test 4 -> modulo')
        //modulo
        for(let i=0;i<lengthPhrase;i++ || i==lengthPhrase) {
            console.log('modulo Test 4',i)
            returnArray[i] = returnArray[i] % 26
            //numberTOLetter
            returnArray[i] = NumberToLetter(returnArray[i]);
            
        }
        console.table(returnArray)
        return returnArray
    
    }
    else if (option=='decrypt') {
        for(let i=0; i<lengthPhrase;i++) {
            numbersPhrase.push(letterToNumber(phrase[i]));
            numbersKey.push(letterToNumber(key[i]));
            returnArray.push(numbersKey[i]-numbersPhrase[i]);
            returnArray[i] = returnArray[i] % 26;
            returnArray[i] = NumberToLetter(returnArray[i]);
        }
    }
    else  {
        return Error
    }

}
