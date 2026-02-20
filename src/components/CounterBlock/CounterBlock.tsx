import { getColumn, sequenceCount } from "@/components/utils/components-utils";
import { useCallback, useMemo } from "react";
import style from "./CounterBlock.module.scss";

type CounterProps = {
    solutionGrid: boolean[][]
    currentGrid: boolean[][]
    isXAxis: boolean
}

function CounterBlock({ solutionGrid, currentGrid, isXAxis }: CounterProps) {

    const sequencesForGrid = useCallback((grid: boolean[][]) => {
        if (isXAxis) { 
            return grid
        } else {
            return grid[0].map((_, index) => getColumn(grid , index))
        }
    }, [isXAxis]);

    const currentSequences = useMemo(() => sequencesForGrid(currentGrid), [currentGrid, sequencesForGrid])   
    const solutionSequences = useMemo(() => sequencesForGrid(solutionGrid), [solutionGrid, sequencesForGrid])   

    const isGuessed = (index: number) => {
        const currentSequence = sequenceCount(currentSequences[index])
        const solutionSequence = sequenceCount(solutionSequences[index])
        return currentSequence === solutionSequence
    }

    return (
        <div className={style.counterBlock} data-x-axis={isXAxis}>
            {solutionSequences.map((value: boolean[], index: number) => 
                <p data-is-guessed={isGuessed(index)}>
                    {sequenceCount(value)}
                </p>
            )}
        </div>
    )
}

export default CounterBlock