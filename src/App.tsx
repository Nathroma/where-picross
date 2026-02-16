import { useState } from 'react';
import './App.scss';
import type { PicrossDatas } from './components/utils/picross-schema';
import GamePage from './pages/GamePage/GamePage';
import MainMenu from './pages/MainMenu/MainMenu';

function App() {

  const [ currentPuzzle, setCurrentPuzzle] = useState<PicrossDatas | null>(null)

  return (
    <div className="app">
      <div className='header'>
        <div className='title-logo'>
          <h1>Where Picross</h1>
          <img src="/where-picross-logo.png" alt="where-picross-logo" />
        </div>
        <div className='divider'/>
      </div>
      {currentPuzzle ? (
        <GamePage picross={currentPuzzle!} returnToMenu={() => setCurrentPuzzle(null)}/>
      ) : (
        <MainMenu onPuzzleSelect={setCurrentPuzzle}/>
      )}
    </div>
  )
}

export default App
