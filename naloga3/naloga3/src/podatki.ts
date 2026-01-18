export interface IgralecPodatki {
    ime: string;
    stevilka: number;
    aktiven: boolean;
}

export interface Ekipa {
    id: number;
    ime: string;
    igralci: IgralecPodatki[];
}

export const ekipe: Ekipa[] = [
    {
        id: 0,
        ime: "NK Matija",
        igralci: [
            { ime: 'Matija', stevilka: 1, aktiven: true },
            { ime: 'Matija2', stevilka: 2, aktiven: false },
            { ime: 'Matija3', stevilka: 3, aktiven: true },
        ]
    },
    {
        id: 1,
        ime: "NK Druga Ekipa",
        igralci: [
            { ime: 'Janez', stevilka: 10, aktiven: true },
            { ime: 'Marko', stevilka: 9, aktiven: true },
        ]
    }
];