function pixel(props){
    function handClick(){
        console.debug('pixel handClick')

        props.onClick()
    }

    console.debug('pixel render')

    return <div
     
    className="pixel"
    style={{ backgroundColor: props.color}}
    onClick={() => handleClick()}>
        
    </div>
}