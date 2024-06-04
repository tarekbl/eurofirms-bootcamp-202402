//usando el find, crea un nuevo Array, con cada uno de los numberos multiplicando por 20

var numbers = [ 10,25, 30, 45, 55, 65]

var numbers20 = numbers.find( function (x){
    return numbers > 30
})

console.log(numbers20)
 //-------------------------------

 //crea una nueva array, con la longitud de cada de los 

 var strings = ['hola', 'mundo', 'a',' todos']
 console.log('CASE 2 : find the first string that contains the string ->u<-')

 var string = strings.find(function(strings){
    return strings.includes('o')
 })

 console.log(string)

 //----------------------------------
 //crea una nuevo Array,
 // que contenga los emails de los usuarios como string

 var users =[
    { name: 'pepito', email:'pepito@grillo.com'},
    { name:'wendy', email:'wendy@darling.com'},
    {name:'peter', email:'peter@pan.com'},
    {name:'pinocho', email:'pin@ocho.com'}
 ]
 
 // crea un nuevo array,
 // que contenga cuidad de los usuarios como string

 var users2 = [
    {
        name: 'pepito', information:{
            city:'Madrid',
            number:'65787959'
        }
    },
    {
        name: 'wendy', information:{
            city:'Barcelona',
            number:'7869406'
        }
    },
    {
        name:'peter',information :{
            city:'sevilla',
            number:'78795040'
        }
    },
    {
        name:'pinocho', information:{
            city:'valencia',
            number:'57694068'
        }
    }
 ]
