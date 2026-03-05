import HexaCell from "@/components/HexaCell/HexaCell"
import { useState } from "react"
import style from "./HexacrossPage.module.scss"

function HexacrossPage () {
    const hexacrossGrid = [
        [true, true, true],
        [true, true, false, true],
        [true, false, false, true, false],
        [true, true, true, false],
        [false, false, true]
    ]
    const cleanState = [
        [false, false, false],
        [false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false],
        [false, false, false]
    ]

    const [currentGrid, setCurrentGrid] = useState<Picross>(cleanState)

    const changeGridState = (line: number, row: number) => {
        const grid = [...currentGrid]
        const currentLine = [...grid[line]]
        currentLine[row] = !currentLine[row]
        grid[line] = currentLine
        setCurrentGrid(grid)
    }

    return (
        <div className={style.hexacrossPage}>
            {currentGrid.map((value: boolean[], line: number) => 
                <div className={style.line}>
                    {value.map((value: boolean, row: number) => 
                        <HexaCell checked={value} onInteract={() => changeGridState(line, row)} />
                    )}
                </div>
            )}
        </div>
    )
}

export default HexacrossPage