import { useState } from "react";
import "./Cell.scss";

type CellProps = {
    isChecked: boolean,
    onInteract: () => unknown
}

function Cell({ isChecked, onInteract}: CellProps) {

    const [state, setState] = useState("blank")

    function toggleChecked() {
        if (state !== "crossed") {
            onInteract()
            isChecked === false ? setState("checked") : setState("blank")
        }
    }

    function toggleCrossed() {
        if (state !== "checked") {
            state === "blank" ? setState("crossed") : setState("blank")
        }
    }

    return (
        <div className="cell" 
            data-state={state} 
            onClick={toggleChecked} 
            onContextMenu={toggleCrossed}>
            {(state === "crossed") && (
                <img src={"./src/assets/cross.svg"} alt="cross" />
            )}
        </div>
    )
}

export default Cell