import { useState } from "react";
import type { Recept } from "../types";

interface Props {
    initial?: Recept | null;
    onSave: (data: Omit<Recept, "id">, id?:number) => void;
    onCancel: () => void;
}


export default function ReceptForm({initial, onSave, onCancel}: Props){
    const [naslov, setNaslov] = useState(initial?.naslov ?? "");
    const [opis, setOpis] = useState(initial?.opis ?? "");
    const [navodila, setNavodila] = useState(initial?.navodila ?? "");
    const [sestavine, setSestavine] = useState(initial?.sestavine ?? "");
    const [vrsta, setVrsta] = useState(initial?.vrsta ?? "");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({naslov, opis, navodila, sestavine, vrsta}, initial?.id);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Naslov</label>
                <input value={naslov} onChange={(e) => setNaslov(e.target.value)} placeholder="Naslov" />
            </div>
            <div>
                <label>Opis</label>
                <input value={opis} onChange={(e) => setOpis(e.target.value)} placeholder="Opis" />
            </div>
            <div>
                <label>Navodila</label>
                <input value={navodila} onChange={(e) => setNavodila(e.target.value)} placeholder="Navodila" />
            </div>
            <div>
                <label>Sestavine</label>
                <input value={sestavine} onChange={(e) => setSestavine(e.target.value)} placeholder="Sestavine" />
            </div>
            <div>
                <label>Vrsta</label>
                <select value={vrsta} onChange={(e) => setVrsta(e.target.value)}>
                    <option value="">Izberi...</option>
                    <option value="sladica">Sladica</option>
                    <option value="glavna">Glavna jed</option>
                    <option value="predjed">Predjed</option>
                </select>
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
}