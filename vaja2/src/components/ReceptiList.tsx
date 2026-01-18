import type { Recept } from "../types"

interface Props{
    recepti: Recept[];
}

export default function ReceptiList({recepti}: Props) {
    if(recepti.length === 0) return <p>Ni še receptov</p>

    return (
        <ul>
            {recepti.map((recept) => (
                <li key={recept.id}>
                    {recept.naslov}
                    {recept.opis}
                    {recept.vrsta}
                    {recept.sestavine}
                    {recept.navodila}
                </li>
            ))}
        </ul>
    );
}