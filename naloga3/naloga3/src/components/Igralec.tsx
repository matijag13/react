import type { IgralecPodatki } from "../podatki";

interface IgralecProps {
    igralec: IgralecPodatki;
}

export default function Igralec({ igralec }: IgralecProps) {
    return(
        <div style={{ border: "1px solid #ccc", margin: "5px", padding: "5px" }}>
            <p>Ime: {igralec.ime}</p>
            <p>Številka: {igralec.stevilka}</p>
            <p>Status: {igralec.aktiven ? "Aktiven" : "Poškodovan"}</p>
        </div>
    );
}