export const Algoinput = (phrase,key, option) => {
    //define some global properties
    var lengthPhrase = phrase.length
    var numbersPhrase = []
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
        for(let i=0;i<lengthPhrase;i++) {
            numbersPhrase.push(letterToNumber(phrase[i])); // push the current phrase number
            numbersKey.push(letterToNumber(key[i])) //push the current Key Number
            returnArray.push(numbersKey[i]+numbersPhrase[i]) //+
            returnArray[i] = returnArray[i] % 26 //modulo 26
            returnArray[i] = NumberToLetter(returnArray[i]); //put them back to letters
        }
        return returnArray
    }
    else if (option=='decrypt') {
        for(let i=0; i<lengthPhrase;i++) {
            numbersPhrase.push(letterToNumber(phrase[i])); //push the current phrase number
            console.log('Number Phrase Array current',numbersPhrase,'Position',i);
            numbersKey.push(letterToNumber(key[i])); //push the current Key Number
            console.log('Number Key Array current',numbersKey,'Position',i);
            returnArray.push(numbersPhrase[i]-numbersKey[i]); //-
            console.log('after -, current ReturnArray',returnArray,'Position',i);
            returnArray[i] = ((returnArray[i] % 26) + 26) % 26 //modulo 26
            returnArray[i] = NumberToLetter(returnArray[i]); //put them back to letters
        }
        return returnArray
    }
    else  {
        console.error('Option is not available. Please choose decrypt or encrypt')
        return Error
    }

}
