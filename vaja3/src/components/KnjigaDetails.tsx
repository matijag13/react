import type { Knjiga } from "../types";

interface Props {
    knjiga: Knjiga;
    onBack: () => void;
}

export default function KnjigaDetails({ knjiga, onBack }: Props) {
    return (
        <div>
            <button onClick={onBack}>Nazaj na seznam</button>
            <h2>{knjiga.naslov}</h2>
            <h3>{knjiga.avtor}</h3>
            <p>{knjiga.opis}</p>
        </div>
    );
}