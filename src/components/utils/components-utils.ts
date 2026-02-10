export const getRow = (grid: boolean[][], index: number) => grid[index];

export const getColumn = (grid: boolean[][], index: number) => grid.map(row => row[index]);

export const sequenceCount = (array: boolean[]) => {
    const sequence: number[] = []
    let squareNumber: number = 0
    let previousState: boolean | null  = null
    let currentChecked: boolean | null = null

    for (let i = 0; i < array.length; i += 1) {
        currentChecked = array[i] 

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
};