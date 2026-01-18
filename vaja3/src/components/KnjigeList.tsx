import type {Knjiga} from "../types";

interface Props{
    knjige: Knjiga[];
    onKnjigaSelect: (knjiga: Knjiga) => void;
}

export default function KnjigaList({knjige, onKnjigaSelect}: Props){
    if(knjige.length === 0) return <p>Ni knjig v seznamu.</p>;
    return(
        <ul>
            {knjige.map((knjiga) => (
                <li key={knjiga.id} 
                 onClick={() => onKnjigaSelect(knjiga)} // Call the function on click
                    style={{cursor: "pointer"}} >
                    {knjiga.naslov} - {knjiga.avtor}
                    <p>{knjiga.opis}</p>
                </li>
            ))}
        </ul>
    );
}