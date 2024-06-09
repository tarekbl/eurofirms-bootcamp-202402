// usando el reduce, suma todos los numbers del array

var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21]

var sumAllNumbers = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
})

console.log('usando del reduce, sum todos los numeros del array')
console.log(sumAllNumbers)

// multiplica todos los numeros del array

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21]

var multiplyAllNumbers = numbers2.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue
})
console.log('multiplica todos los numeros del array')
console.log(multiplyAllNumbers)

//suma todos los numeros del array, dando un valor inicial de 10

var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21]

var sumAllNumbersPlusTen = numbers3.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 10)

console.log('sum todos los numeros del array, dando un valor inicial de 10')
console.log(sumAllNumbersPlusTen)

// junta todos los strings del array en un solo(con el reduce) dando un valor inicial de 'hola'
var strings = [' mundoº', 'pepito', 'como', 'va todo']

var sumStrings = strings.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 'hola')

console.log('junta todos los strings del array en un solo (con el reduce) dando un valor inicial de ->Hola<-')
console.log(sumStrings)

// haz un array con todos los usuarios cuyo nombre empiezan con pe

var users = [

]

var usersPe = users.reduce(function (accumulator, currentValue) {
    if (currentValue.name.startsWith('pe'))
        accumulator.push(currentValue)
    return accumulator
}, [])

console.log('haz un array con todos los usuarios cuyo nombre empiezan con pe')
console.log(usersPe)

// haz un array que contenga cada uno de los usuario, preo solo con la prpiedad name y email

var users2 = []

var userData = user2.reduce(function (accumulator, currentValue) {
    var newUser = { name: currentValue.name, email: currentValue.email }
    accumulator.push(newUser)
    return accumulator
}, [])

console.log('haz un array que tenga uno de los usuarios, pero solo com la propiedad name y email')
console.log(userData)

// en user3 esta el name como primer valor y surname como el segundo del usuario, crea un objecto que contengaestas propiedades

var user3 = ['peter', 'pan']

var peterObject = user3.reduce(function (accumulator, currentValue, currentIndex) {
    if (currentIndex === 0)
        accumulator.name = currentValue
    else
        accumulator.surname = currentValue
    return accumulator
}, {})
// wait i need to put empty parentheses

console.log('en user3 esta el name como primer valor y surname como el segundo del usuario, crea un object que contengaestas propiedades')
console.log(peterObject)

// user4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objectos, donde cada objecto tengp la propedad name y surname correspondiente

var user4 = [['pepito', 'grillo'], ['wendy', 'darling'], ['peter', 'pan']]

var userObjects = user4.reduce(function (accumulator, currentValue, currentIndex) {
    var toAdd = currentValue.reduce(function (accumulator, currentValue, currentIndex) {
        if (currentIndex === 0)
            accumulator.name = currentValue
        else
            accumulator.surname = currentValue
        return accumulator
    }, {})
    accumulator.push(toAdd)
    return accumulator
}, [])

console.log('crea un array de objectos, donde cada object tenga la propiedad name y surname correspondiente')
console.log(userObjects)