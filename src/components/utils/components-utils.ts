export const transpose = (grid: boolean[][]): boolean[][] => {
    return grid[0].map((_, colIndex) => 
        grid.map(row => row[colIndex])
    );
};

export const getRow = (grid: boolean[][], index: number) => grid[index];

export const getCol = (grid: boolean[][], index: number) => grid.map(row => row[index]);