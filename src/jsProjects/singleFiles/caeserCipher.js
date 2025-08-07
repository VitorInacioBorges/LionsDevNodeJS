function caesarCipher(x, y){
    if(x < 'a' || x > 'z'){
        return x;
    }
    const firstCharCode = 'a'.charCodeAt();
    const charCode = x.charCodeAt();
    const newX = firstCharCode + (charCode - firstCharCode + y) % 26;
    return String.fromCharCode(newX);
}

function UNceasarCipher(){
    
}

function encryptSentenceWithCaesarCipher(sentence, number){
    let encryptedSentence = '';
    sentence = sentence.toLowerCase();
    for(let i=0; i<sentence.length; i++){
        let newS = caesarCipher(sentence[i], number);
        encryptedSentence += newS;
    }
    return encryptedSentence;
}

function decryptSentenceWithCaesarCipher(criptedSentence, number){
    let decryptedSentence = '';
    criptedSentence = criptedSentence.toLowerCase();
    for(let i=0; i<decryptedSentence.length; i++){

    }
}

console.log(encryptSentenceWithCaesarCipher('abc def ghi', 1));