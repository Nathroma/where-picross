import { useCallback, useState } from 'react';
import './App.scss';
import Grid from './components/Grid/Grid';
import SquareCounter from './components/SquareCounter/SquareCounter';
import VerticalSquareCounter from './components/VerticalSquareCounter/VerticalSquareCounter';

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

  const squareCountLine = useCallback((line: number) => {
    const sequence: number[] = []
    let squareNumber: number = 0
    let previousState: boolean | null  = null
    for (let i = 0; i < cellCount; i += 1) {
      const currentChecked = stateGrid[line][i]

      if (currentChecked) {
        squareNumber += 1
      } else {
        if (previousState) {
          sequence.push(squareNumber)
        }
        squareNumber = 0
      }
      previousState = currentChecked
    }
    if (squareNumber != 0) {
      sequence.push(squareNumber)
    }
    return sequence.join("-")
  }, [stateGrid]);

  const squareCountColumn = useCallback((column: number) => {
    const sequence: number[] = []
    let squareNumber: number = 0
    let previousState: boolean | null  = null
    for (let i = 0; i < lineCount; i += 1) {
      const currentChecked = stateGrid[i][column]

      if (currentChecked) {
        squareNumber += 1
      } else {
        if (previousState) {
          sequence.push(squareNumber)
        }
        squareNumber = 0
      }
      previousState = currentChecked
    }
    if (squareNumber != 0) {
      sequence.push(squareNumber)
    }
    return sequence.join("-")
  }, [stateGrid]);

  return (
    <div className="app">
      <h1>Where Picross</h1>
      <div className='board'>
        <div className='horizontal-wrapper'>
          <Grid stateGrid={stateGrid} onCellClick={changeState}/>

          <div className='horizontal-counter'>
            {stateGrid.map((_value: boolean[], index: number) => 
              <SquareCounter counter={squareCountLine(index)}/>
            )}
          </div>
        </div>
        <div className='vertical-counter'>
          {stateGrid.map((_value: any, index: number) =>
            <VerticalSquareCounter counter={squareCountColumn(index)}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
