import AppHeader from '@/components/AppHeader/AppHeader';
import type { PicrossDatas } from '@/components/utils/picross-schema';
import GamePage from '@/pages/GamePage/GamePage';
import MainMenu from '@/pages/MainMenu/MainMenu';
import { useState } from 'react';
import style from './App.module.scss';

function App() {

  const [ currentPuzzle, setCurrentPuzzle] = useState<PicrossDatas | null>(null)

  return (
    <div className={style.app}>
      <AppHeader/>
      {currentPuzzle ? (
        <GamePage picross={currentPuzzle!} returnToMenu={() => setCurrentPuzzle(null)}/>
      ) : (
        <MainMenu onPuzzleSelect={setCurrentPuzzle}/>
      )}
    </div>
  )
}

export default App
