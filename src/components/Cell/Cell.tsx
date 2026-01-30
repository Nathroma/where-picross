import { useState } from "react";
import "./Cell.scss";

function Cell() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="cell" data-checked={isChecked} onClick={() => setIsChecked(!isChecked)}/>
    )
}

export default Cell