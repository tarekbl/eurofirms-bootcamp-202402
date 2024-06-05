//usando el map, crea un nuevo Array, con cada uno de los numberos multiplicando por 2

var nums = [10, 20, 30, 40, 50, 60]
console.log('CASE1 : return an array of numbers multipled by 2')
var case1 = nums.map(function (nums) {
    return nums * 2
})
console.log(case1)

var strings = ['hola', 'mundo', 'a', 'todos']
console.log('CASE 2 : return an array with the length of all the strings')
var case2 = strings.map(function (strings) {
    return strings.length
})
console.log(case2)

var numbers2 = [12, 40, 6, 7, 24]
console.log('CASE3 : return an array with the remainder of each number divided by 2')
var case3 = numbers2.map(function (number) {
    return number % 2
})
console.log(case3)

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' }
]
console.log('CASE 4: return an array that returns each email from users')

var case4 = users.map(function (user) {
    return user.email
})
console.log(case4)
// crea un nuevo array,
// que contenga cuidad de los usuarios como string

var users2 = [
    {
        name: 'pepito', information: {
            city: 'Madrid',
            number: '65787959'
        }
    },
    {
        name: 'wendy', information: {
            city: 'Barcelona',
            number: '7869406'
        }
    },
    {
        name: 'peter', information: {
            city: 'sevilla',
            number: '78795040'
        }
    },
    {
        name: 'pinocho', information: {
            city: 'valencia',
            number: '57694068'
        }
    }
]
console.log('CASE 5: return an array with the city of each user')
var case5 = users2.map(function (user) {
    return user.information.city

})
console.log(case5)