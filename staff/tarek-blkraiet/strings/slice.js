
function slice(string,indexStart, indexEnd){
    var result=''

    for(var i= indexStart;i<indexEnd;i++){
        result = result + string[i] // para ir acumulando

    }
    return result 
}


console.log('case1 print caracters from 6 to 10')
var string = 'Estoy aprendiendo programacion'
console.log(string.slice(6,17));


console.log('case 2 print characters from from -30 to-12 ')
console.log(string.slice(-30,-12))