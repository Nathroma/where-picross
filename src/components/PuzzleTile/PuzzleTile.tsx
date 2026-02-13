import type { PicrossDatas } from "../utils/picross-schema"
import "./PuzzleTile.scss"

type PuzzleTileProps = {
    selectedPuzzle: PicrossDatas
    clickTile: () => unknown
}

function PuzzleTile({selectedPuzzle, clickTile}: PuzzleTileProps) {

    const puzzleSize = `${selectedPuzzle.grid.length}x${selectedPuzzle.grid[0].length}`

    return (
        <div className="tile" onClick={() => clickTile()}>
            <h3>{selectedPuzzle.name}</h3>
            <p>{puzzleSize}</p>
            <img src="src\assets\question-mark.svg" alt="question-mark" />
        </div>
    )
}

export default PuzzleTile