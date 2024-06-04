var nums = [0, 12, 5, 40, 6, 7, 24, 13, 21]
console.log('CASE 1 : create a new array filtring by odd numbers')
var case1 = nums.filter(function (num) {
    return num % 2 !== 0
})
console.log(case1)

var strings = ['hola mundo', 'pepito', 'hello world to the people', 'todos']
console.log('CASE 2 : create a new array with the elements that contain two words ')

var case2 = strings.filter(function (string) {
    return string.split(' ').length === 2
})
console.log(case2)

var numbers2 = [100, -20, 3, -200, 50, 8, -5]
console.log('CASE3 : create a new array with the numbers that have two digits')
var case3 = numbers2.filter(function (number) {
    return number > 9 && number < 100 || number < -9 && number > -100
})
console.log(case3)
var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'topa', email: 'to@pa.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' }
]

console.log('CASE4: create a new array with the users that its begins with ->p<-')
var case4 = users.filter(function (user) {
    return user.name.startsWith('p')
})
console.log(case4)

var user2 = [
    {
        name: 'pepito', information: {
            address: {
                city: 'madrid',
                street: 'Gran via'
            },
            number: 634569667
        }
    },

    {
        name: ' wendy', information: {
            address: {
                city: 'Vigo',
                street: 'Torrecediera'
            },
            number: 467942165
        }

    },
    {
        name: 'peter', information: {
            address: {
                city: 'Ourense',
                street: 'pina trivenca'
            },
            number: 675546469
        }
    },
    {
        name: 'topa', information: {
            address: {
                city: 'Lugo',
                street: 'llorente'
            },
            number: 65788554346
        }
    },
    {
        name: 'pinocho', information: {
            address: {
                city: 'valencia',
                street: 'urzais'
            },
            number: '435689934'
        }
    }
]
console.log('CASE5: create an array that contains all users that lives in lugo')
var case5 = user2.filter(function (user) {
    return user.information.address.city === 'Lugo'

})
console.log(case5)