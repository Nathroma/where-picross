import './App.scss';
import Cell from './components/Cell/Cell';

function App() {
  const squareChecked: number = 6 ;

  return (
    <>
      <div className="app">
        <h1>Where Picross</h1>
        <div className="grid">
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
        </div>
          <p className='squareNumber'>{squareChecked}</p>
      </div>
    </>
  )
}

export default App
