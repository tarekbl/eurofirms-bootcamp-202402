function ColorButtons(props){
    console.debug('colorButtons render')

    return <ul className="colors">
        {props.colors.map(color=> <li key={color}>
            <ColorButtons
            selected= {props.color === color}
            color={color}
            onClick={() => props.onColorClick(color)}
            />
        </li>)}
    </ul>
}