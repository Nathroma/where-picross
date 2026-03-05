import CounterBlock from "@/components/CounterBlock/CounterBlock";
import Grid from "@/components/Grid/Grid";
import StopWatch, { formatTimer } from "@/components/StopWatch/StopWatch";
import type { PicrossDatas } from "@/components/utils/picross-schema";
import { saveProgress, useLoadProgress } from "@/hooks/save-load";
import { useEffect, useMemo, useState } from "react";
import style from "./GamePage.module.scss";

type GamePageProps = {
    picross: PicrossDatas
}

function GamePage({picross}: GamePageProps) {

    const [isFinished, setIsFinished] = useState<boolean>(useLoadProgress(picross.id).isComplete)
    const [timer, setTimer] = useState<number>(useLoadProgress(picross.id).time)
    
    const solutionGrid = useMemo(() => picross.grid, [])
    const startState: Picross = Array(solutionGrid.length).fill(Array(solutionGrid[0].length).fill(false))
    const [currentGrid, setCurrentGrid] = useState<Picross>(useLoadProgress(picross.id).gridState ?? startState)

    useEffect(() => {
        if (!isFinished) {
            const interval = setInterval(() => {
                setTimer(timer => timer + 1)
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [isFinished])
    
    useEffect(() => {
        if (JSON.stringify(currentGrid) === JSON.stringify(solutionGrid)) {
            setIsFinished(true)
        }
    }, [currentGrid, solutionGrid])

    useEffect(() => {
        saveProgress(picross.id, {
            time: timer,
            isComplete: isFinished,
            gridState: currentGrid
        })
    }, [timer, isFinished, currentGrid, picross.id])
    

    const changeGridState = (line: number, cell: number) => {
        if (!isFinished) {
            const grid = [...currentGrid]
            const currentLine = [...grid[line]]
            currentLine[cell] = !currentLine[cell]
            grid[line] = currentLine
            setCurrentGrid(grid)
        }
    }

    return (
        <div className={style.gamePage}>
            <div className={style.boardHeader}>
                {isFinished ? <p>Félicitation ! vous avez mis {formatTimer(timer)}</p> : <p/>}
            </div>
            <div className={style.board}>
                <div className={style.verticalCounterWrapper}>
                    <p/>
                    <CounterBlock solutionGrid={solutionGrid} currentGrid={currentGrid} isXAxis={false}/>
                </div>
                <div className={style.horizontalWrapper}>
                    <div className={style.horizontalCounterWrapper}>
                        <CounterBlock solutionGrid={solutionGrid} currentGrid={currentGrid} isXAxis={true}/>
                    </div>
                        <Grid stateGrid={currentGrid} onCellClick={changeGridState}/>
                </div>
                <div className={style.footerBoard}>
                    <button onClick={() => console.log(currentGrid)}>
                        Log
                    </button>
                    <StopWatch timer={timer}/>
                </div>
            </div>
        </div>
    )
}

export default GamePage