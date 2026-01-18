import { useState } from "react";
import type { Dogodek } from "../types";

interface Props{
    initial?: Dogodek | null;
    onSave: (data: Omit<Dogodek, "id">, id?:number) => void;
    onCancel: () => void;
}

export default function DogodekForm({ initial, onSave, onCancel }: Props){
    const [naziv, setNaziv] = useState(initial?.naziv ?? "");
    const [datum, setDatum] = useState(initial?.datum ?? "");
    const [lokacija, setLokacija] = useState(initial?.lokacija ?? "");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({naziv, datum, lokacija}, initial?.id);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Naziv</label>
                <input required value={naziv} onChange={(e) => setNaziv(e.target.value)} placeholder="Naziv" />
            </div>
            <div>
                <label>Datum</label>
                <input required value={datum} onChange={(e) => setDatum(e.target.value)} placeholder="Datum" />
            </div>
            <div>
                <label>Lokacija</label>
                <select required value={lokacija} onChange={(e) => setLokacija(e.target.value)}>
                    <option value="">Izberi...</option>
                    <option value="Maribor">Maribor</option>
                    <option value="Ljubljana">Ljubljana</option>
                    <option value="Celje">Celje</option>
                </select>
            </div>
            <button type="submit">Shrani</button>
            <button type="button" onClick={onCancel}>Prekliči</button>
        </form>
    );
}