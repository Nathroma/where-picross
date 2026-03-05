import style from "./HexaCell.module.scss"

type HexaCellProps = {
    checked: boolean
    onInteract: () => unknown
}

function HexaCell({checked, onInteract}: HexaCellProps) {
    
    return (
        <div className={style.hexaCell} data-checked={checked} onClick={() => onInteract()}/>
    )
}

export default HexaCell