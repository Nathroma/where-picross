import { useState } from 'react';
import './App.scss';
import Cell from './components/Cell/Cell';
import SquareCounter from './components/SquareCounter/SquareCounter';

function App() {
  const cellCount = 10

  const [counter, setCounter] = useState<number>(0)
  const [isChecked, setIsChecked] = useState<boolean[]>(Array(cellCount).fill(false))

  const changeState = (index: number) => {
    const table = [...isChecked]
    table[index] = !table[index]
    setIsChecked(table)
  }

  const handleCounter = () => {
    let squareNumber: number = 0
    for (const value of isChecked) {
      if (value === true) {
        squareNumber += 1
      }
    }
    setCounter(squareNumber)
  }

  return (
    <>
      <div className="app">
        <h1>Where Picross</h1>
        <div className='board'>
          <div className="grid">
            {isChecked.map((value: boolean, index: number)=> 
              <Cell isChecked={value} onInteract={() => {changeState(index); handleCounter()}}/>
            )}
          </div>
          <SquareCounter counter={counter}/>
        </div>
      </div>
    </>
  )
}

export default App
