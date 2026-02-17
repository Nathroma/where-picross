import type { PicrossDatas } from "@/components/utils/picross-schema";
import { useMemo } from "react";
import "./PuzzleTile.scss";

type PuzzleTileProps = {
    puzzle: PicrossDatas
    clickTile: () => unknown
}

function PuzzleTile({puzzle, clickTile}: PuzzleTileProps) {
    const progression = useMemo(() => JSON.parse(String(puzzle.id)), [])

    const puzzleSize = `${puzzle.grid.length}x${puzzle.grid[0].length}`

    return (
        <div className="tile" data-complete={progression.isComplete || false} onClick={() => clickTile()}>
            <h3>{puzzle.name}</h3>
            <p>{puzzleSize}</p>
            <img src="src\assets\question-mark.svg" alt="question-mark" />
        </div>
    )
}

export default PuzzleTile