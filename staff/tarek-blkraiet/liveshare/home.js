// presntation layer

var title = document.querySelector('h1')
var logoutbutton = document.querySelector('button')

try {
    var user = restrieveUser(sessionStorage.username)

    title.innerText = 'Hello, ' + user.name + '!'
} catch (error) {

    var homeAddress = location.href

    var loginAddress = homeAddress.replace('home','login')

    location.href = loginAddress
}

logoutbutton.onclick = function (){
    delete sessionStorage.username

    var homeAddress = location.href
    var loginAddress =homeAddress.replace('home', 'login')

    location.href = loginAddress
}