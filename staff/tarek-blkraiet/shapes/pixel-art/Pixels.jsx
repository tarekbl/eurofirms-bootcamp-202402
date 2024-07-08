function pixels(props) {
    console.debug('pixels render')

    return <section className="pixels" style={{
        gridTemplateColumns: ` repeat(${props.pixels.length},1fr)`,
        gridTemplateRows: `repeat(${props.pixels.length},1fr)`
    }
    }>
        {
            props.pixels.map((row, i) => row.map((column, j) =>
                <pixel
                    key={`${i}-${j}`}
                    color={props.pixels[i][j]}
                    onclick={() => props.onPixelClick(i, j)}

                />)).flat(Infinity)
        }
    </section>
}