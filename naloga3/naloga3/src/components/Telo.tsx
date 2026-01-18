   import { useState, useEffect } from "react";
import Igralec from "./Igralec";
import type { IgralecPodatki } from "../podatki";

interface TeloProps {
    ekipa: IgralecPodatki[];
}

export default function Telo({ ekipa }: TeloProps) {
    // Hold the list of players in state
    const [igralci, setIgralci] = useState<IgralecPodatki[]>(ekipa);

    // Update state if the prop changes (when switching teams via router)
    useEffect(() => {
        setIgralci(ekipa);
    }, [ekipa]);

    return (
        <ul>
            {igralci.map((igralec, index) => (
                <li key={index}>
                    {/* 3. Pass the whole player object 'igralec' to the component */}
                    <Igralec igralec={igralec} />
                </li>
            ))}
        </ul>
    );
}