import { useState } from "react"
import style from "./PicrossCreatorPage.module.scss"

function PicrossCreatorPage() {
    const [puzzleHeight, setPuzzleHeight] = useState<number>(10)
    const [puzzleWidth, setPuzzleWidth] = useState<number>(10)
    const [gridState, setGridState] = useState<boolean[][]>()

    function handleApply(): void {
        throw new Error("Function not implemented.")
    }

    return (
        <div className={style.test}>
            <div className={style.sizeInputBlock}>
                <input className={style.heightInput} type="text" value={puzzleHeight}/>
                <input className={style.widthInput} type="text" value={puzzleWidth}/>
                <button onClick={() => handleApply()}>Appliquer</button>
            </div>
        </div>
    )
}

export default PicrossCreatorPage