import { useState } from "react";
import type { Knjiga } from "../types";

interface Props{
    initial?: Knjiga | null;
    onSave: (data: Omit<Knjiga, "id">, id?:number) => void;
    onCancel: () => void;

}

export default function KnjigaForm({initial, onSave, onCancel}: Props){
    const [naslov, setNaslov] = useState(initial?.naslov ?? "");
    const [avtor, setAvtor] = useState(initial?.avtor ?? "");
    const [opis, setOpis] = useState(initial?.opis ?? "");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({naslov, avtor, opis}, initial?.id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Naslov</label>
                <input value={naslov} onChange={(e) => setNaslov(e.target.value)} placeholder="Naslov" />
            </div>
            <div>
                <label>Avtor</label>
                <input value={avtor} onChange={(e) => setAvtor(e.target.value)} placeholder="Avtor" />
            </div>
            <div>
                <label>Opis</label>
                <input value={opis} onChange={(e) => setOpis(e.target.value)} placeholder="Opis" />
            </div>
            <button type="submit" >Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>    
    );
}