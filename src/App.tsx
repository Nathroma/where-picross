import { useState } from 'react';
import './App.scss';
import Grid from './components/Grid/Grid';
import SquareCounter from './components/SquareCounter/SquareCounter';

function App() {

  const solutionGrid = [
    [true, true, false, true, true, true],
    [true, true, false, true, true, true],
    [true, true, false, true, true, true],
    [true, true, false, false, true, true],
    [false, true, false, false, false, true],
    [false, false, false, true, true, true,],
    [false, true, false, true, true, true,],
    [false, true, false, true, true, true,],
  ]

  const startState: boolean[][] = Array(solutionGrid.length).fill(Array(solutionGrid[0].length).fill(false))

  const [currentGrid, setCurrentGrid] = useState<boolean[][]>(startState)

  const changeGridState = (line: number, cell: number) => {
    const grid = [...currentGrid]
    const currentLine = [...grid[line]]
    currentLine[cell] = !currentLine[cell]
    grid[line] = currentLine
    setCurrentGrid(grid)
  }

  return (
    <div className="app">
      <h1>Where Picross</h1>
      <div className='board'>
        <div className='vertical-counter-wrapper'>
          <SquareCounter currentGrid={currentGrid} solutionGrid={solutionGrid} isXAxis={false}/>
        </div>
        <div className='horizontal-wrapper'>
          <div className='horizontal-counter-wrapper'>
            <SquareCounter currentGrid={currentGrid} solutionGrid={solutionGrid} isXAxis={true}/>
          </div>
          <Grid stateGrid={currentGrid} onCellClick={changeGridState}/>
          <div className='horizontal-counter-wrapper'>
            <SquareCounter currentGrid={currentGrid} solutionGrid={solutionGrid} isXAxis={true}/>
          </div>
        </div>
        <div className='vertical-counter-wrapper'>
          <SquareCounter currentGrid={currentGrid} solutionGrid={solutionGrid} isXAxis={false}/>
        </div>
      </div>
    </div>
  )
}

export default App
