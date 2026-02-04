import { useState } from 'react';
import './App.scss';
import Grid from './components/Grid/Grid';
import SquareCounter from './components/SquareCounter/SquareCounter';

function App() {
  const cellCount = 6
  const lineCount = 6

  const [stateGrid, setStateGrid] = useState<boolean[][]>(Array(lineCount).fill(Array(cellCount).fill(false)))

  const changeState = (line: number, cell: number) => {
    const grid = [...stateGrid]
    const currentLine = [...grid[line]]
    currentLine[cell] = !currentLine[cell]
    grid[line] = currentLine
    setStateGrid(grid)
  }

  return (
    <div className="app">
      <h1>Where Picross</h1>
      <div className='board'>
        <div className='horizontal-wrapper'>
          <Grid stateGrid={stateGrid} onCellClick={changeState}/>

          <div className='horizontal-counter-wrapper'>
            <SquareCounter stateGrid={stateGrid} isXAxis={true}/>
          </div>
        </div>
        <div className='vertical-counter-wrapper'>
          <SquareCounter stateGrid={stateGrid} isXAxis={false}/>
        </div>
      </div>
    </div>
  )
}

export default App
