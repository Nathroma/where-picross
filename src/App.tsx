import AppHeader from '@/components/AppHeader/AppHeader';
import type { PicrossDatas } from '@/components/utils/picross-schema';
import GamePage from '@/pages/GamePage/GamePage';
import MainMenu from '@/pages/MainMenu/MainMenu';
import PhotoToPicross from '@/pages/PhotoToPicrossPage/PhotoToPicross';
import PicrossCreatorPage from '@/pages/PicrossCreatorPage/PicrossCreatorPage';
import { useEffect, useState } from 'react';
import style from './App.module.scss';

export enum SelectablePage {
  mainMenu= "mainMenu",
  gamePage= "gamePage",
  creatorPage= "creatorPage",
  canvasPage= "canvasPage",
}

function App() {

  const [ currentPage, setCurrentPage] = useState<SelectablePage>(SelectablePage.mainMenu)
  const [ currentPuzzle, setCurrentPuzzle] = useState<PicrossDatas | null>(null)

  useEffect(() => {
    if (currentPuzzle !== null) {
      setCurrentPage(SelectablePage.gamePage)
    }

  }, [currentPage, currentPuzzle])
  
  const setSelectedPage = (page: SelectablePage) => setCurrentPage(page)
  const returnToMainMenu = () => {
    setCurrentPage(SelectablePage.mainMenu)
    setCurrentPuzzle(null)
  }

  return (
    <div className={style.app}>
      <AppHeader 
        isMainMenu={currentPage === SelectablePage.mainMenu} 
        returnToMainMenu={returnToMainMenu} 
        selectPage={setSelectedPage}/>
      {
        {
          mainMenu: <MainMenu onPuzzleSelect={setCurrentPuzzle}/>,
          gamePage: <GamePage picross={currentPuzzle!} returnToMenu={() => setCurrentPuzzle(null)}/>,
          creatorPage: <PicrossCreatorPage/>,
          canvasPage: <PhotoToPicross/>,
        }[currentPage]
      }
    </div>
  )
}

export default App
