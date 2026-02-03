import { useCallback, useState } from 'react';
import './App.scss';
import Cell from './components/Cell/Cell';
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

  const squareCount = useCallback((line: number) => {
    const sequence: number[] = []
    let squareNumber: number = 0
    let previousState: boolean | null  = null
    for (let i = 0; i < stateGrid[line].length; i += 1) {
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

  return (
    <div className="app">
      <h1>Where Picross</h1>
      <div className='board'>
        <div className='grid'>
          {stateGrid.map((value: boolean[], line: number)=> 
            <div className="line">
              {value.map((value: boolean, cell: number)=> 
                <Cell isChecked={value} onInteract={() => {changeState(line, cell);}}/>
              )}
              <SquareCounter counter={squareCount(line)}/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
