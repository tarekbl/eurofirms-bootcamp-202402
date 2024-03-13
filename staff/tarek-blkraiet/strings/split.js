function split (string, separator, limit = Infinity){
    var result= []
    var acumulatedString = ''
    
    for(var i=0; i < string.length && result.length< limit; i++){
        var character = string[i]

        if (separator === ''){
            result[result.length] = character
        }
        else if (separator ?.length && separator [0] === character){
            var stringToCompare =''

            for (var j=i; j < separator.length +i; j++){
                stringToCompare +=string[j]
            }

            if (separator === stringToCompare){
                result[result.length] = acumulatedString

                acumulatedString =''

                i += separator .length -1
            }
            else {
                acumulatedString +=character
            }
        }
        else if (character === separator){
            result[result.length] = acumulatedString
            acumulatedString = ''
        }
        else{
            acumulatedString += character
        }
   
    }
    if (result.length < limit && separator !=='') {
        result[result.length]= acumulatedString
    }

    return result
}
console-log('function SPLIT')

console.log('case 1: split the string with " " separator')

var hello = 'hello world to the people'

var result = split(hello, ' ')

console.log({expected:['Hello','world','to','the','people'], received: result})

//--------

console.log('case 2: split the string with " " separator and limit of 2')

var hello2 ='hello world to the people'
var result2 = split(hello2, ' ',2)
console.log({expected:['Hello','world'], received:result2})

//-----
