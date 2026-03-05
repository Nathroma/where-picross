import type { Picross } from "@/types/global-types"
import style from "./MapGrid.module.scss"

type MapGridProps = {
    grid: Picross
}

function MapGrid({grid}: MapGridProps) {
    const cellSize = 60 / Math.max(grid.length, grid[0].length)

    return (
        <div className={style.mapGrid}>
            {grid.map((value: boolean[], _: number)=> 
                <div className={style.mapLine}>
                {value.map((value: boolean, _: number)=> 
                    <div className={style.mapCell} style={{height: cellSize}}
                        data-is-checked={value}>
                    </div>
                )}
                </div>
            )}
        </div>
    )
}

export default MapGrid