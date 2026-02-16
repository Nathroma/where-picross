import { useEffect, useMemo, useState } from "react";
import CounterBlock from "../../components/CounterBlock/CounterBlock";
import Grid from "../../components/Grid/Grid";
import type { PicrossDatas } from "../../components/utils/picross-schema";
import "./GamePage.scss";

type GamePageProps = {
    picross: PicrossDatas
    returnToMenu: () => unknown
}

function GamePage({picross, returnToMenu: returnToMainMenu}: GamePageProps) {

    const [timer, setTimer] = useState<number>(0)
    const [isFinished, setIsFinished] = useState<boolean>(false)

    useEffect(()=> {
        if (!isFinished) {
            const interval = setInterval(() => {
                setTimer(timer => timer + 1)
            }, 1000)
            return () => clearTimeout(interval)
        }
       
    }, [isFinished])

    const solutionGrid = useMemo(() => picross.grid, [])
    const startState: boolean[][] = Array(solutionGrid.length).fill(Array(solutionGrid[0].length).fill(false))

    const [currentGrid, setCurrentGrid] = useState<boolean[][]>(startState)

    const changeGridState = (line: number, cell: number) => {
      const grid = [...currentGrid]
      const currentLine = [...grid[line]]
      currentLine[cell] = !currentLine[cell]
      grid[line] = currentLine
      setCurrentGrid(grid)
    }

    useMemo(() => {
        if (JSON.stringify(currentGrid) === JSON.stringify(solutionGrid)) {
            setIsFinished(true)
        }
    }, [currentGrid, solutionGrid])

    const formattedTimer = () => {
        const rawHour: number = Math.floor(timer / 3600)
        const rawMinute: number = Math.floor(timer / 60) % 60
        const rawSecond: number = timer % 60

        if (rawHour === 0) {
            const formattedMinute: string = String(rawMinute)
            const formattedSecond: string = String(rawSecond).padStart(2, "0")
            return `${formattedMinute}:${formattedSecond}`
        } else {
            const formattedHour: string = String(rawHour)
            const formattedMinute: string = String(rawMinute).padStart(2, "0")
            const formattedSecond: string = String(rawSecond).padStart(2, "0")
            return `${formattedHour}:${formattedMinute}:${formattedSecond}`
        }
    }

    return (
        <div className="game-page">
            {isFinished && <h2>Félicitation !</h2>}
            <p>{formattedTimer()}</p>
            <div className='board'>
                <div className='vertical-counter-wrapper'>
                    <CounterBlock solutionGrid={solutionGrid} currentGrid={currentGrid} isXAxis={false}/>
                </div>
                <div className='horizontal-wrapper'>
                    <div className='horizontal-counter-wrapper'>
                        <CounterBlock solutionGrid={solutionGrid} currentGrid={currentGrid} isXAxis={true}/>
                    </div>
                        <Grid stateGrid={currentGrid} onCellClick={changeGridState}/>
                </div>
                <p className="return-button" onClick={() => returnToMainMenu()}>← Retourner au menu principal</p>
            </div>
        </div>
    )
}

export default GamePage