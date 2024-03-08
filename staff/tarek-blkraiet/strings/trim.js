function trim(frases){
    var result = ''
    
    for (var i=0; i<frases.length; i++){
        if(frases[i] !== '' || result)
        result +=frases[i]
        
    
    }
    return result
    }
    
    
    var frases = '    Holii mundo   '
    
    console.log('remove space from this string ')
    //console.log((result: trim(frases)))
    
    // tengo que hacer un issue en github con el nuevo rama 'string'
    