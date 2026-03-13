import Grid from "@/components/Grid/Grid"
import { getColumn, sequenceCount } from "@/components/utils/components-utils"
import type { Picross } from "@/types/global-types"
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

type PicrossCreatorPageProps = {
    picross: Picross | null
}

function ExtendBoardButton({onInteract, side}: ExtendBoardButtonProps) {
    return (
        <button className={style.extendBoardButton} onClick={() => onInteract(side)}>
                <img src="src\assets\plus-sign.svg" alt="plus-sign" />
        </button>
    )
}

function ReduceBoardButton({onInteract, side}: ExtendBoardButtonProps) {
    return (
        <button className={style.extendBoardButton} onClick={() => onInteract(side)}>
                <img src="src\assets\trash.svg" alt="minus-sign" />
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

function PicrossCreatorPage({picross}: PicrossCreatorPageProps) {
    const blankState = () => Array.from({ length: puzzleWidth }, () => Array(puzzleHeight).fill(false))

    const [inputHeight, setInputHeight] = useState<number>(picross?.length ?? 10)
    const [puzzleHeight, setPuzzleHeight] = useState<number>(picross?.[0]?.length ?? 10)
    const [inputWidth, setInputWidth] = useState<number>(picross?.length ?? 10)
    const [puzzleWidth, setPuzzleWidth] = useState<number>(picross?.[0]?.length ?? 10)
    const [gridState, setGridState] = useState<Picross>(picross ?? blankState())


    const applyPuzzleSize = () => {
        // TODO
        // Call add or remove function, or another way 
        setPuzzleHeight(inputHeight)
        setPuzzleWidth(inputWidth)
    }    

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
        setPuzzleHeight(grid[0].length)
        setPuzzleWidth(grid.length)
    }

    const removeGridSize = (side: GridSide) => {
        let grid = [...gridState]
        if (side === GridSide.top || side === GridSide.bottom) {
            side === GridSide.top ? grid.shift() : grid.pop()
        } else {
            grid.forEach(line => {
                side === GridSide.left ? line.shift() : line.pop()
            });
        }
        setGridState(grid)
        setPuzzleHeight(grid[0].length)
        setPuzzleWidth(grid.length)
    }

    const removeEmptyLine = () => {
        let grid = [...gridState.map(row => [...row])]
        
        const isLineEmpty = (row: boolean[]) => sequenceCount(row) === "0"
        const isColEmpty = (columnIndex: number) => sequenceCount(getColumn(grid, columnIndex)) === "0"

        while (grid.length > 1 && isLineEmpty(grid[0])) {
            grid.shift()
        }

        while (grid.length > 1 && isLineEmpty(grid[grid.length - 1])) {
            grid.pop()
        }

        while (grid[0].length > 1 && isColEmpty(0)) {
            grid.forEach(row => row.shift())
        }

        while (grid[0].length > 1 && isColEmpty(grid[0].length - 1)) {
            grid.forEach(row => row.pop())
        }

        setGridState(grid)
        setPuzzleHeight(grid.length)
        setPuzzleWidth(grid[0].length)
    }

    useEffect(() => {
        setInputHeight(puzzleHeight)
        setInputWidth(puzzleWidth)
    }, [puzzleHeight, puzzleWidth])

    return (
        <div className={style.creatorPage}>
            <div className={style.sizeInputBlock}>
                <GridSizeInput sizeInput={inputHeight} onValueChange={setInputHeight}/>
                <GridSizeInput sizeInput={inputWidth} onValueChange={setInputWidth}/>
                <button onClick={() => applyPuzzleSize()}>Appliquer</button>
                <button className={style.clearGridButton} onClick={() => setGridState(blankState())}>
                    <img src="src\assets\trash.svg" alt="trash-bin" />
                </button>
                <button className={style.autoResizeButton} onClick={() => removeEmptyLine()}>Resize</button>
            </div>
            <div className={style.sizeButtonHorizontal}>
                <ExtendBoardButton onInteract={addGridSize} side={GridSide.top}/>
                <ReduceBoardButton onInteract={removeGridSize} side={GridSide.top}/>
            </div>
            <div className={style.puzzleBoard}>
                <div className={style.sizeButtonVertical}>
                    <ExtendBoardButton onInteract={addGridSize} side={GridSide.left}/>
                    <ReduceBoardButton onInteract={removeGridSize} side={GridSide.left}/>
                </div>
                <Grid stateGrid={gridState} onCellClick={changeGridState}/>
                <div className={style.sizeButtonVertical}>

                    <ExtendBoardButton onInteract={addGridSize} side={GridSide.right}/>
                    <ReduceBoardButton onInteract={removeGridSize} side={GridSide.right}/>
                </div>
            </div>
            <div className={style.sizeButtonHorizontal}>
                <ExtendBoardButton onInteract={addGridSize} side={GridSide.bottom}/>
                <ReduceBoardButton onInteract={removeGridSize} side={GridSide.bottom}/>
            </div>
            <button onClick={() =>  console.log(gridState)}>Log</button>
        </div>
    )
}

export default PicrossCreatorPage