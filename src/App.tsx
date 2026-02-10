import { useState } from 'react';
import './App.scss';
import CounterBlock from './components/CounterBlock/CounterBlock';
import Grid from './components/Grid/Grid';

function App() {

  const solutionGrid = [
    [false, true, true, false, false, true],
    [true, false, false, true, true, true,],
    [true, true, true, true, true, true,],
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
          <CounterBlock solutionGrid={solutionGrid} currentGrid={currentGrid} isXAxis={false}/>
        </div>
        <div className='horizontal-wrapper'>
          <div className='horizontal-counter-wrapper'>
            <CounterBlock solutionGrid={solutionGrid} currentGrid={currentGrid} isXAxis={true}/>
          </div>
          <Grid stateGrid={currentGrid} onCellClick={changeGridState}/>
        </div>
      </div>
    </div>
  )
}

export default App
