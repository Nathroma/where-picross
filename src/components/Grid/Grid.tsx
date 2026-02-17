import Cell from "@/components/Cell/Cell";
import "./Grid.scss";

type stateGridProps= {
    stateGrid: boolean[][]
    onCellClick: (lineIndex: number, columnIndex: number) => unknown
}

function Grid({stateGrid, onCellClick}: stateGridProps) {
    return (
        <div className='grid'>
            {stateGrid.map((value: boolean[], line: number)=> 
                <div className="line">
                {value.map((value: boolean, cell: number)=> 
                    <Cell isChecked={value} onInteract={() => {onCellClick(line, cell);}}/>
                )}
                </div>
            )}
        </div>
    )
}

export default Grid