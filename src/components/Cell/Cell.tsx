import "./Cell.scss";

type CellProps = {
    isChecked: boolean,
    onInteract: Function
}

function Cell({ isChecked, onInteract}: CellProps) {

    return (
        <div className="cell" data-checked={isChecked} onClick={() => onInteract()}/>
    )
}

export default Cell