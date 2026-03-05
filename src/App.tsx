import AppHeader from '@/components/AppHeader/AppHeader';
import type { PicrossDatas } from '@/components/utils/picross-schema';
import GamePage from '@/pages/GamePage/GamePage';
import HexacrossPage from '@/pages/HexacrossPage/HexacrossPage';
import MainMenu from '@/pages/MainMenu/MainMenu';
import PhotoToPicross from '@/pages/PhotoToPicrossPage/PhotoToPicross';
import PicrossCreatorPage from '@/pages/PicrossCreatorPage/PicrossCreatorPage';
import type { Picross } from '@/types/global-types';
import { useEffect, useState } from 'react';
import style from './App.module.scss';

export enum SelectablePage {
  mainMenu= "mainMenu",
  gamePage= "gamePage",
  creatorPage= "creatorPage",
  canvasPage= "canvasPage",
  hexaCross= "hexaCross",
}

function App() {

  const [ currentPage, setCurrentPage] = useState<SelectablePage>(SelectablePage.mainMenu)
  const [ currentPuzzle, setCurrentPuzzle] = useState<PicrossDatas | null>(null)
  const [ generatedPicross, setGeneratedPicross] = useState<Picross | null>(null)

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

  const generatePicross = (picross: Picross) => {
    setGeneratedPicross(picross)
    setCurrentPage(SelectablePage.creatorPage)
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
          gamePage: <GamePage picross={currentPuzzle!}/>,
          creatorPage: <PicrossCreatorPage picross={generatedPicross}/>,
          canvasPage: <PhotoToPicross generatePicross={generatePicross}/>,
          hexaCross: <HexacrossPage/>
        }[currentPage]
      }
    </div>
  )
}

export default App
