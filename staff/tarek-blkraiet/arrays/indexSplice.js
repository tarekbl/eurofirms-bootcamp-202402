// usando el indexOf, encuentra el numero 30
// ahora usando el splice, borrarlo

var numbers = [10, 20, 30, 40, 50, 60]

var index = numbers.indexOf(30)

numbers.splice(index, 1)

console.log('usando el indexOf, encuentra el numero 30.ahora usando el splice, borrarlo')
console.log(numbers)

// usando el findIndex encuentra al usuario con el id

var users = [


]

var index = user.findeIndex(function (user) {
    return user.id === 'miss to add the id'
})

// borrar todos los numeros impares
users.splice(index, 1)

console.log('usando el findIndex encuentra el usuario con el id -> y borrarlo')
console.log(users)

// borrar todos los numeros impares

var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]

numbers2 = numbers.filter(function (number) {
    return !(number % 2 !== 0)
})


// borra todos los usarios cuyo empiece con 'pe'

var user2 = [

]
user2 = user2.filter(function (user) {
    return !user.name.startsWith('pe')
})
console.log('borra todos los usuarios cuyo nombre empiece con ->pe<-')
console.log(user2)