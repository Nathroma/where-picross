import PuzzleTile from "@/components/PuzzleTile/PuzzleTile";
import { picrossList, type PicrossDatas } from "@/components/utils/picross-schema";
import "./MainMenu.scss";

type MainMenuProps = {
    onPuzzleSelect: (tile: PicrossDatas) => unknown
}

function MainMenu({onPuzzleSelect}: MainMenuProps) {

    return (
    <div className="main-menu">
        <h2>Choisissez un puzzle</h2>
        <div className="puzzles-grid">
            {picrossList.map((picrossDatas: PicrossDatas, _) => 
                <div className="tile">
                    <PuzzleTile puzzle={picrossDatas} clickTile={() => onPuzzleSelect(picrossDatas)}/>
                </div>
            )}
        </div>
    </div>
)
}

export default MainMenu