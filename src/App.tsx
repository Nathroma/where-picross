import { useState } from 'react';
import './App.scss';
import type { PicrossDatas } from './components/utils/picross-schema';
import GamePage from './pages/GamePage/GamePage';
import MainMenu from './pages/MainMenu/MainMenu';

function App() {

  const [ currentPuzzle, setCurrentPuzzle] = useState<PicrossDatas | null>(null)

  return (
    <div className="app">
      <h1>Where Picross</h1>
      {currentPuzzle ? (
        <GamePage picross={currentPuzzle!} returnToMenu={() => setCurrentPuzzle(null)}/>
      ) : (
        <MainMenu onPuzzleSelect={setCurrentPuzzle}/>
      )}
    </div>
  )
}

export default App
