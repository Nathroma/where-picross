import { useState } from "react";
import "./Cell.scss";

type CellProps = {
    isChecked: boolean,
    onInteract: () => unknown
}

function Cell({ isChecked, onInteract}: CellProps) {

    const [isCrossed, setIsCrossed] = useState<boolean>(false)

    if (isChecked && isCrossed) {
        setIsCrossed(false)
    }   

    function toggleChecked() {
        !isCrossed ? onInteract() : null
    }

    function toggleCrossed() {
        if (!isChecked) {
            isCrossed ? setIsCrossed(false) : setIsCrossed(true)
        }
    }

    return (
        <div className="cell" 
            data-is-checked={isChecked}
            onClick={toggleChecked} 
            onContextMenu={toggleCrossed}>
            {(isCrossed) && (
                <img src={"./src/assets/cross.svg"} alt="cross" />
            )}
        </div>
    )
}

export default Cell