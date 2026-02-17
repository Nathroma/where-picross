import { useMemo, useState } from "react";
import CounterBlock from "../../components/CounterBlock/CounterBlock";
import Grid from "../../components/Grid/Grid";
import StopWatch from "../../components/StopWatch/StopWatch";
import type { PicrossDatas } from "../../components/utils/picross-schema";
import "./GamePage.scss";

type GamePageProps = {
    picross: PicrossDatas
    returnToMenu: () => unknown
}

function GamePage({picross, returnToMenu: returnToMainMenu}: GamePageProps) {

    const [isFinished, setIsFinished] = useState<boolean>(false)

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

    return (
        <div className="game-page">
            <div className="board-header">
                <button className="main-menu-button" onClick={() => returnToMainMenu()}>
                    <img src="./src/assets/arrow.svg" alt="return-arrow" />
                    <img src="./src/assets/house.svg" alt="house" />
                </button>
                {isFinished ? <h2>Félicitation !</h2> : <h2/>}
            </div>
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
                <div className="footer-board">
                    <button onClick={() => console.log(currentGrid)}>
                        Log
                    </button>
                    <StopWatch stopTimer={isFinished}/>
                </div>
            </div>
        </div>
    )
}

export default GamePage