import { useCallback } from "react";
import "./SquareCounter.scss";

type CounterProps = {
    stateGrid: boolean[][]
    isXAxis: boolean
}

function SquareCounter({ stateGrid, isXAxis }: CounterProps) {

    const squareCount = useCallback((index: number, isXAxis:boolean) => {
        const sequence: number[] = []
        let squareNumber: number = 0
        let previousState: boolean | null  = null
        let forIterate: number = 0
        let currentChecked: boolean| null = null
        if (isXAxis) {
            forIterate = stateGrid[0].length
            
        } else {
            forIterate = stateGrid.length
        }

        for (let i = 0; i < forIterate; i += 1) {
            if (isXAxis) {
                currentChecked = stateGrid[index][i]
            } else {
                currentChecked = stateGrid[i][index]
            }

        if (currentChecked) {
            squareNumber += 1
        } else {
            if (previousState) {
            sequence.push(squareNumber)
            }
            squareNumber = 0
        }
        previousState = currentChecked
        }
        if (squareNumber != 0) {
        sequence.push(squareNumber)
        }
        return sequence.join("-")
    }, [stateGrid]);

    return (
        <div className={"counter"} data-x-axis={isXAxis}>
            {stateGrid.map((_value: boolean[], index: number) => 
              <p >
                {squareCount(index, isXAxis)}
              </p>
            )}
        </div>
    )
}

export default SquareCounter