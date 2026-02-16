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

    useEffect(()=> {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)

        return () => clearTimeout(interval)
    }, [])

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
  
    const isComplete = () => JSON.stringify(currentGrid) === JSON.stringify(solutionGrid)

    const formattedTimer = () => {
        const minute: number = Math.floor(timer / 60)
        const seconde: string = String(timer % 60).padStart(2, "0")
        return `${minute}:${seconde}`
    }

    return (
        <div className="game-page">
            <h2>{formattedTimer()}</h2>
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