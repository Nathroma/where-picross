import Cell from "@/components/Cell/Cell";
import style from "./Grid.module.scss";

type stateGridProps= {
    stateGrid: boolean[][]
    onCellClick: (lineIndex: number, columnIndex: number) => unknown
}

function Grid({stateGrid, onCellClick}: stateGridProps) {
    return (
        <div className={style.grid}>
            {stateGrid.map((value: boolean[], line: number)=> 
                <div className={style.line}>
                {value.map((value: boolean, cell: number)=> 
                    <Cell isChecked={value} onInteract={() => {onCellClick(line, cell)}}/>
                )}
                </div>
            )}
        </div>
    )
}

export default Grid