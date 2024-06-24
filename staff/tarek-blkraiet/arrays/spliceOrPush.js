// el usario peter con id 'miss add the id' le ha dado a guardar a un post( el id de este se guarda en el array saved del user)
// si peter ya lo tiene guardado, deberia borrarse el id del array 
// si no lo tiene, deberia agregarlo

// para buscar al usuario, utliizar el id


// hacer dos casos, uno cuando lo encuentra en el array, otro para cuando no lo encuentra
// metodos sugeridos a usar : find, includes, splice, push
// (puedes agregar otras o prescindir de alguno si lo ves necesario, splice y push son obligatorios)

var users = [

]

function insertPost(array, id, postId) {
    var user = array.find(function(user){
        return user.id === id
    })

    // si exite el post id -> lo borro

    if(user.saved.includes(postId))
        user.saved.splice(user.saved.findIndex(function(id) {
    return id === postId
    }), 1)

    else

    // si no existe -> lo añado

    user.saved.push(postId)
}

var users2 = [

]

insertPost(users2, '', '') // aqui deberia borrarlo
insertPost(users2,'','') //aqui deberia insertarlo

console.log('antes de hacer operaciones')
console.log(users)
console.log('despues de hacer operaciones')
console.log(users2)