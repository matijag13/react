import type { Dogodek } from "../types";

interface Props{
    dogodki: Dogodek[];
    onDogodekSelect: (dogodek: Dogodek) => void;
}

export default function DogodekList({ dogodki, onDogodekSelect}: Props){
    if(dogodki.length === 0) return <p>Ni še dogodkov</p>;

    return (
        <ul>
            {dogodki.map((dogodek)=> (
                <li key={dogodek.id} onClick={() => onDogodekSelect(dogodek)} style={{cursor: "pointer"}}>
                    {dogodek.naziv} - {dogodek.datum}
                    <p>{dogodek.lokacija}</p>
                </li>
            ))}
        </ul>
    );

}