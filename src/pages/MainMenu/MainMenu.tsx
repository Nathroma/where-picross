import PuzzleTile from "@/components/PuzzleTile/PuzzleTile";
import { getPicrossDifficulty } from "@/components/utils/components-utils";
import { picrossList, type PicrossDatas } from "@/components/utils/picross-schema";
import { useLoadProgress } from "@/hooks/save-load";
import { useCallback, useMemo } from "react";
import style from "./MainMenu.module.scss";

type MainMenuProps = {
    onPuzzleSelect: (tile: PicrossDatas) => unknown
}

function MainMenu({onPuzzleSelect}: MainMenuProps) {

    const difficultyList: number[] = useMemo(() => {
        let difficultyList: number[] = []
        picrossList.forEach(picross => {
            const picrossDifficulty:number = getPicrossDifficulty(picross.grid)
            if (!difficultyList.includes(picrossDifficulty)) {
                difficultyList.push(picrossDifficulty)
            }
        });
        return difficultyList
    }, [])

    const finishedPicrossInDifficulty = useCallback((difficulty: number) => {
        let finishedPicross: number = 0
        let totalPicrossInDifficulty: number = 0
        picrossList.forEach(picross => {
            if (getPicrossDifficulty(picross.grid) === difficulty) {
                if (useLoadProgress(picross.id).isComplete) { 
                    finishedPicross += 1
                }
                totalPicrossInDifficulty += 1
            }
        });
        return [finishedPicross, totalPicrossInDifficulty]
    }, [picrossList, getPicrossDifficulty])

    return (
    <div className={style.mainMenu}>
        <h2>Choisissez un puzzle</h2>
        <div className={style.puzzlesGrid}>
            {
                difficultyList.map((difficulty: number, _) => 
                    <div className={style.difficultyBlock}>
                        <div className={style.difficultyHeader}>
                            <p>Complexité : {difficulty}</p>
                            <p>{finishedPicrossInDifficulty(difficulty)[0]} / {finishedPicrossInDifficulty(difficulty)[1]}</p>
                        </div>
                        <div className={style.tileBlock}>
                            {picrossList.map((picrossDatas: PicrossDatas, _) => 
                                difficulty === getPicrossDifficulty(picrossDatas.grid) &&
                                <div className={style.tile}>
                                    <PuzzleTile puzzle={picrossDatas} clickTile={() => onPuzzleSelect(picrossDatas)}/>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    </div>
)
}

export default MainMenu