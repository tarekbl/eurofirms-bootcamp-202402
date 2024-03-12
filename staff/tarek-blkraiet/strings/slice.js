function slice (string,indexStart, indexEnd){
    var result=''

    // if (indexStart === -indexStart)
    // if (indexFind === -indexEnd)

    if (index < 0){
        indexStart = string.length + indexStart;
    }
    if (index < 0) {
        index = string.length +indexEnd;
    }

    for (var i= indexStart; i<indexEnd; i++){
        result = result + string[i] // para ir acumulando

    }
    return result 
}


console.log('case1 print caracters from 6 to 10')
var string = 'Estoy aprendiendo programacion'
var result = slice(string,6,11)
console.log({ expected:'apren',received:result});



console.log('case 2 print characters from from -30 to-12 ')
console.log(string.slice(-30,-12))