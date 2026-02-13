export type PicrossDatas = {
    id: number, 
    name: string,
    grid: boolean[][],
}

export const picrossList: PicrossDatas[] = [
    // 5 x 5
    {
        id: 0,
        name: "Croix",
        grid: [
            [false, false, true, false, false],
            [false, false, true, false, false],
            [true, true, true, true, true],
            [false, false, true, false, false],
            [false, false, true, false, false],
        ]
    },
    {
        id: 1,
        name: "Coeur",
        grid: [
            [true,  false, false, false, true ],
            [true,  true,  false, true,  true ],
            [true,  true,  true,  true,  true ],
            [false, true,  true,  true,  false],
            [false, false, true,  false, false],
        ]
    },
    {
        id: 2,
        name: "Smiley",
        grid: [
            [false, true,  false, true,  false],
            [false, true,  false, true,  false],
            [false, false, false, false, false],
            [true,  false, false, false, true ],
            [false, true,  true,  true,  false],
        ]
    },
    // 7 x 7
    {
        id: 3,
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
        id: 4,
        name: "Maison",
        grid: [
            [false, false, true,  true,  true,  false, false],
            [false, true,  true,  true,  true,  true,  false],
            [true,  true,  true,  true,  true,  true,  true ],
            [false, false, true,  true,  true,  false, false],
            [false, false, true,  true,  true,  false, false],
            [false, false, true,  true,  true,  false, false],
            [true,  true,  true,  true,  true,  true,  true ],
        ]
    },

    // 10 x 10
    {
        id: 5,
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
        id: 6,
        name: "Etoile",
        grid: [
            [false, false, false, true,  false, false, true,  false, false, false],
            [false, false, false, true,  false, false, true,  false, false, false],
            [true,  true,  true,  true,  true,  true,  true,  true,  true,  true ],
            [false, false, true,  true,  true,  true,  true,  true,  false, false],
            [false, false, false, true,  true,  true,  true,  false, false, false],
            [true,  true,  true,  true,  true,  true,  true,  true,  true,  true ],
            [false, false, false, true,  true,  true,  true,  false, false, false],
            [false, false, true,  true,  true,  true,  true,  true,  false, false],
            [false, false, false, true,  false, false, true,  false, false, false],
            [false, false, false, true,  false, false, true,  false, false, false],
        ]
    },
]
