import PuzzleTile from "@/components/PuzzleTile/PuzzleTile";
import { picrossList, type PicrossDatas } from "@/components/utils/picross-schema";
import style from "./MainMenu.module.scss";

type MainMenuProps = {
    onPuzzleSelect: (tile: PicrossDatas) => unknown
}

function MainMenu({onPuzzleSelect}: MainMenuProps) {

    return (
    <div className={style.mainMenu}>
        <h2>Choisissez un puzzle</h2>
        <div className={style.puzzlesGrid}>
            {picrossList.map((picrossDatas: PicrossDatas, _) => 
                <div className={style.tile}>
                    <PuzzleTile puzzle={picrossDatas} clickTile={() => onPuzzleSelect(picrossDatas)}/>
                </div>
            )}
        </div>
    </div>
)
}

export default MainMenu