import "./MapGrid.scss"

type MapGridProps = {
    grid: boolean[][]
}

function MapGrid({grid}: MapGridProps) {
    const cellSize = 60 / Math.max(grid.length, grid[0].length)

    return (
        <div className='map-grid'>
            {grid.map((value: boolean[], _: number)=> 
                <div className="map-line">
                {value.map((value: boolean, _: number)=> 
                    <div className="map-cell" style={{height: cellSize}}
                        data-is-checked={value}>
                    </div>
                )}
                </div>
            )}
        </div>
    )
}

export default MapGrid