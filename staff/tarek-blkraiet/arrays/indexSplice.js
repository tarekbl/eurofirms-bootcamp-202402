// usando el indexOf, encuentra el numero 30
// ahora usando el splice, borrarlo

var numbers = [10, 20, 30, 40, 50, 60]

var index = numbers.indexOf(30)

numbers.splice(index,1)
console.log('usando el indexOf, encuentra el numero 30.ahora usando el splice, borrarlo')
console.log(numbers)

// usando el findIndex encuentra al usuario con el id

var users = []

// borrar todos los numeros impares

var number2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]

numbers2 = numbers.filter(function(number){
    return!(number % 2 !==0)
})

console.log('borra todos los numeros impares')
console.log(numbers2)

// borra todos los usarios cuyo empiece con 'pe'

var user2 = [

]
user2 = user2.filter(function(user){
    return !user.name.startsWith('pe')
})
console.log('borra todos los usuarios cuyo nombre empiece con ->pe<-')
console.log(users2)