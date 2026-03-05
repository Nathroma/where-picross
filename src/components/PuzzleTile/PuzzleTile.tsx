import MapGrid from "@/components/MapGrid/MapGrid";
import type { PicrossDatas } from "@/components/utils/picross-schema";
import { useLoadProgress } from "@/hooks/save-load";
import type { Picross } from "@/types/global-types";
import style from "./PuzzleTile.module.scss";

type PuzzleTileProps = {
    puzzle: PicrossDatas
    clickTile: () => unknown
}

function PuzzleTile({puzzle, clickTile}: PuzzleTileProps) {
    const puzzleSize = `${puzzle.grid.length}x${puzzle.grid[0].length}`
    const blankState: Picross = Array(puzzle.grid.length).fill(Array(puzzle.grid[0].length).fill(false))

    return (
        <div className={style.tile} data-complete={useLoadProgress(puzzle.id).isComplete} onClick={() => clickTile()}>
            <h3>{useLoadProgress(puzzle.id).isComplete ? puzzle.name : "???"}</h3>
            <p>{puzzleSize}</p>
            <MapGrid grid={useLoadProgress(puzzle.id).gridState ?? blankState}/>
        </div>
    )
}

export default PuzzleTile