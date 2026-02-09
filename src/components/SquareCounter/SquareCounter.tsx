import { useCallback } from "react";
import { transpose } from "../utils/components-utils";
import "./SquareCounter.scss";

type CounterProps = {
    currentGrid: boolean[][]
    solutionGrid: boolean[][]
    isXAxis: boolean
}

function SquareCounter({ currentGrid, solutionGrid,  isXAxis }: CounterProps) {

    const isSequenceGuessed = (index: number, isXaxis: boolean, solutionGrid: boolean[][]) => {
        let currentTransposedGrid = []
        if (isXaxis) {
            currentTransposedGrid = currentGrid
            currentTransposedGrid = currentGrid
        } else {
            currentTransposedGrid = transpose(currentGrid)
            currentTransposedGrid = transpose(currentGrid)
        }
        const guessedSequence: boolean[] = currentTransposedGrid[index]

    }

    const newSquareCount = useCallback((grid: boolean[]) => {
        const sequence: number[] = []
        let squareNumber: number = 0
        let previousState: boolean | null  = null
        let currentChecked: boolean | null = null

        for (let i = 0; i < grid.length; i += 1) {
            currentChecked = grid[i] 

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
    }, [currentGrid]);

    return (
        <div className={"counter"} data-x-axis={isXAxis}>
            {(isXAxis
                ? currentGrid.map((value: boolean[], _: number) => 
                    <p>
                        {newSquareCount(value)}
                    </p>
                  )
                : transpose(currentGrid).map((value: boolean[], _: number) => 
                    <p>
                        {newSquareCount(value)}
                    </p>
                  )
            )}
        </div>
    )
}

export default SquareCounter