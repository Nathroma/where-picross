import { useMemo, useState } from "react";
import CounterBlock from "../../components/CounterBlock/CounterBlock";
import Grid from "../../components/Grid/Grid";
import type { PicrossDatas } from "../../components/utils/picross-schema";
import "./GamePage.scss";

type GamePageProps = {
    picross: PicrossDatas
    returnToMenu: () => unknown
}

function GamePage({picross, returnToMenu: returnToMainMenu}: GamePageProps) {

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
  
    function IsComplete() {
      const isComplete = JSON.stringify(currentGrid) === JSON.stringify(solutionGrid)
      return isComplete ? <h2>Congratulation</h2> : <h2/>
    }

    return (
        <div className="game-page">
            <IsComplete/>
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