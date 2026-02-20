export type PicrossDatas = {
    id: string, 
    name: string,
    grid: boolean[][],
}

// template : 
    // {
    //     id: 'camelCaseName5x5',
    //     name: "Display Name",
    //     grid: [
    //         [false, false, false, false, false],
    //         [false, false, false, false, false],
    //         [false, false, false, false, false],
    //         [false, false, false, false, false],
    //         [false, false, false, false, false],
    //     ]
    // },

export const picrossList: PicrossDatas[] = [
    // 5 x 5
    {
        id: "musicNote5x5",
        name: "Note",
        grid: [
            [false, false, true, true, false],
            [false, false, true, false, true],
            [false, false, true, false, true],
            [true, true, true, false, false],
            [true, true, true, false, false],
        ]
    },
    {
        id: "hearth5x5",
        name: "Coeur",
        grid: [
            [false, true, false, true, false ],
            [true, false, true, false, true ],
            [true, false, false, false, true ],
            [false, true, false, true, false],
            [false, false, true, false, false],
        ]
    },
    {
        id: "smiley5x5",
        name: "Smiley",
        grid: [
            [false, true,  false, true,  false],
            [false, true,  false, true,  false],
            [false, false, false, false, false],
            [true,  false, false, false, true ],
            [false, true,  true,  true,  false],
        ]
    },
    {
        id: "dog5x5",
        name: "Display Name",
        grid: [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
        ]
    },
    {
        id: 'house5x5',
        name: "Display Name",
        grid: [
            [false, false, true, false, false],
            [false, true, true, true, false],
            [true, true, true, true, true],
            [false, true, false, true, false],
            [false, true, true, true, false],
        ]
    },
    // 7 x 7
    {
        id: "diamond7x7",
        name: "Diamant",
        grid: [
            [false, false, false, true,  false, false, false],
            [false, false, true,  true,  true,  false, false],
            [false, true,  true,  true,  true,  true,  false],
            [true,  true,  true,  true,  true,  true,  true ],
            [false, true,  true,  true,  true,  true,  false],
            [false, false, true,  true,  true,  false, false],
            [false, false, false, true,  false, false, false],
        ]
    },
    {
        id: "house7x7",
        name: "Maison",
        grid: [
            [false, false, true, true, true, false, false],
            [false, true, true, true, true, true, false],
            [true, true, true, true, true, true, true],
            [true, false, true, true, true, false, true],
            [true, true, true, true, true, true, true],
            [true, false, true, false, true, false, true],
            [true, true, true, false, true, true, true],
        ]
    },
    // 9x9
    
    // 10 x 10
    {
        id: 'duck10x10',
        name: "Display Name",
        grid: [
            [false, false, true, false, false, false, false, false, false, false],
            [false, true, true, true, false, false, false, false, false, false],
            [true, true, false, true, false, false, false, false, false, false],
            [false, true, true, true, false, false, true, true, true, true],
            [false, false, true, true, false, false, true, true, true, false],
            [false, false, true, true, true, true, true, true, false, false],
            [true, false, true, true, true, true, true, false, false, false],
            [true, true, true, true, true, true, false, false, false, false],
            [false, false, false, false, true, false, false, false, false, false],
            [false, false, false, true, true, false, false, false, false, false],
        ]
    },
    {
        id: "hearth10x10",
        name: "Coeur",
        grid: [
            [false, true,  true,  false, false, false, false, true,  true,  false],
            [true,  true,  true,  true,  false, false, true,  true,  true,  true ],
            [true,  true,  true,  true,  true,  true,  true,  true,  true,  true ],
            [true,  true,  true,  true,  true,  true,  true,  true,  true,  true ],
            [false, true,  true,  true,  true,  true,  true,  true,  true,  false],
            [false, false, true,  true,  true,  true,  true,  true,  false, false],
            [false, false, false, true,  true,  true,  true,  false, false, false],
            [false, false, false, false, true,  true,  false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
        ]
    },
    {
        id: "squirrel10x10",
        name: "Ecureuil",
        grid: [
            [false, true, true, true, true, false, false, true, false, false],
            [true, true, false, true, true, false, true, true, true, false],
            [true, false, false, true, true, false, true, false, true, true],
            [false, false, true, true, true, false, true, true, true, true],
            [false, true, true, true, false, true, true, true, true, false],
            [false, true, true, false, true, true, true, true, true, false],
            [false, true, true, true, true, true, true, true, true, true],
            [false, true, true, true, true, true, true, true, false, false],
            [false, false, false, true, true, true, true, false, false, false],
            [false, false, false, false, true, true, true, true, true, false],
        ]
    },
    // 15x15
    {
        id: "star15x15",
        name: "Etoile",
        grid: [
            [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, true, true, true, false, false, false, false, false, false],
            [false, false, false, false, false, false, true, true, true, false, false, false, false, false, false],
            [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
            [false, false, false, false, false, true, true, true, true, true, false, false, false, false, false],
            [true, true, true, true, true, true, false, true, false, true, true, true, true, true, true],
            [false, true, true, true, true, true, false, true, false, true, true, true, true, true, false],
            [false, false, true, true, true, true, false, true, false, true, true, true, true, false, false],
            [false, false, false, true, true, true, true, true, true, true, true, true, false, false, false],
            [false, false, false, false, true, true, true, true, true, true, true, false, false, false, false],
            [false, false, false, true, true, true, true, true, true, true, true, true, false, false, false],
            [false, false, false, true, true, true, true, true, true, true, true, true, false, false, false],
            [false, false, true, true, true, true, true, false, true, true, true, true, true, false, false],
            [false, false, true, true, true, true, false, false, false, true, true, true, true, false, false],
            [false, true, true, true, false, false, false, false, false, false, false, true, true, true, false],
        ]
    },
]
