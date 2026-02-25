import Grid from "@/components/Grid/Grid"
import { useEffect, useState } from "react"
import style from "./PicrossCreatorPage.module.scss"

enum GridSide {
    right = "right",
    left = "left",
    top = "top",
    bottom = "bottom",
}

type ExtendBoardButtonProps = {
    onInteract: (side: GridSide) => unknown
    side: GridSide
}

type GridSizeInputProps = {
    sizeInput: number
    onValueChange: (value: number) => unknown
}

function ExtendBoardButton({onInteract, side}: ExtendBoardButtonProps) {
    return (
        <button className={style.extendBoardButton} onClick={() => onInteract(side)}>
                <img src="src\assets\plus-sign.svg" alt="plus-sign" />
        </button>
    )
}

function GridSizeInput({sizeInput, onValueChange}: GridSizeInputProps) {
    return (
        <input className={style.heightInput} 
                    type="text" 
                    value={sizeInput}
                    onChange={(e) => onValueChange(Number(e.target.value))}/>
    )
}

function PicrossCreatorPage() {
    const blankState = () => Array.from({ length: puzzleWidth }, () => Array(puzzleHeight).fill(false))

    const [inputHeight, setInputHeight] = useState<number>(10)
    const [puzzleHeight, setPuzzleHeight] = useState<number>(10)
    const [inputWidth, setInputWidth] = useState<number>(10)
    const [puzzleWidth, setPuzzleWidth] = useState<number>(10)
    const [gridState, setGridState] = useState<boolean[][]>(blankState())


    const applyPuzzleSize = () => {
        setPuzzleHeight(inputHeight)
        setPuzzleWidth(inputWidth)
    }

    useEffect(() => {
        const newGrid = () =>Array.from({ length: puzzleWidth }, () => Array(puzzleHeight).fill(false))
        setGridState(newGrid())
    }, [puzzleHeight, puzzleWidth])
    

    const changeGridState = (line: number, cell: number) => {
        const grid = [...gridState]
        const currentLine = [...grid[line]]
        currentLine[cell] = !currentLine[cell]
        grid[line] = currentLine
        setGridState(grid)
    }

    const addGridSize = (side: GridSide) => {
        let grid = [...gridState]
        const emptyLine = Array(grid[0].length).fill(false)
        if (side === GridSide.top || side === GridSide.bottom) {
            side === GridSide.bottom ? grid.push(emptyLine) : grid.unshift(emptyLine)          
        } else {
            grid = grid.map(line =>
                side === GridSide.right ? [...line, false] : [false, ...line]
            );
        }
        setGridState(grid)
        setInputHeight(grid.length)
        setInputWidth(grid[0].length)
    }

    return (
        <div className={style.creatorPage}>
            <div className={style.sizeInputBlock}>
                <GridSizeInput sizeInput={inputHeight} onValueChange={setInputHeight}/>
                <GridSizeInput sizeInput={inputWidth} onValueChange={setInputWidth}/>
                <button onClick={() => applyPuzzleSize()}>Appliquer</button>
                <button className={style.clearGridButton} onClick={() => setGridState(blankState())}>
                    <img src="src\assets\trash.svg" alt="trash-bin" />
                </button>
            </div>
            <ExtendBoardButton onInteract={addGridSize} side={GridSide.top}/>
            <div className={style.puzzleBoard}>
                <ExtendBoardButton onInteract={addGridSize} side={GridSide.left}/>
                <Grid stateGrid={gridState} onCellClick={changeGridState}/>
                <ExtendBoardButton onInteract={addGridSize} side={GridSide.right}/>
            </div>
            <ExtendBoardButton onInteract={addGridSize} side={GridSide.bottom}/>
            <button onClick={() =>  console.log(gridState)}>Log</button>
        </div>
    )
}

export default PicrossCreatorPage