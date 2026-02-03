import { useMemo, useState } from 'react';
import './App.scss';
import Cell from './components/Cell/Cell';
import SquareCounter from './components/SquareCounter/SquareCounter';

function App() {
  const cellCount = 6
  const lineCount = 6

  const [stateLine, setStateLine] = useState<boolean[]>(Array(cellCount).fill(false))
  const [stateGrid, setStateGrid] = useState< typeof stateLine[]>(Array(lineCount).fill(stateLine))

  const changeState = (line: number, cell: number) => {
    const grid = [...stateGrid]
    const currentLine = [...stateLine]

    currentLine[cell] = !currentLine[cell]
    setStateLine(currentLine)
    
    grid[line] = currentLine
    setStateGrid(grid)
  }

  const squareCount = useMemo(() => {
    const sequence: number[] = []
    let squareNumber: number = 0
    let previousState: boolean | null  = null
    for (let i = 0; i < stateLine.length; i += 1) {
      const currentChecked = stateLine[i]

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
  }, [stateLine]);

  return (
    <div className="app">
      <h1>Where Picross</h1>
      <div className='board'>
        <div className='grid'>
          {stateGrid.map((value: boolean[], line: number)=> 
            <div className="line">
              {stateLine.map((value: boolean, cell: number)=> 
                <Cell isChecked={value} onInteract={() => {changeState(line, cell);}}/>
              )}
              <SquareCounter counter={squareCount}/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
