function colorButton(props) {
    function handleClick() {
        console.debug('colorButtonButton handClick')

        Props.onClick()
    }
    console.debug('colorButton render')

    return < button
        className={`color-button ${props.selected ? 'color-button-selected` : ''}´
        style ={{ backgroundColor: props.color }}
        onClick={() => handleClick()}


    />
}