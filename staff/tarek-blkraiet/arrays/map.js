/*/usando el map, crea un nuevo Array, con cada uno de los numberos multiplicando por 2

var numbers = [ 10,20, 30, 40, 50, 60]

var numbersx2 = numbers.map( function(x){
    return x* 2
})
console.log(numbersx2)
 //-------------------------------

 //crea una nueva array, con la longitud de cada de los 

 var strings = ['hola', 'mundo', 'a',' todos']

 //var 

 //----------------------------------
 //crea una nuevo Array,
 // que contenga los emails de los usuarios como string

 var users =[
    { name: 'pepito', email:'pepito@grillo.com'},
    { name:'wendy', email:'wendy@darling.com'},
    {name:'peter', email:'peter@pan.com'},
    {name:'pinocho', email:'pin@ocho.com'}
 ]
 var email = users.map(function(user){
  return user.email
 })*/
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
 var cities = users2.map(function(user){
    return user.information.city

 })
 console.log(cities)