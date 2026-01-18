import type { Recept } from "../types.ts";

const BASE_URL = 'http://localhost:3000/seznam';

export async function getRecepti(): Promise<Recept[]> {
    const res = await fetch(BASE_URL);
    return res.json();
}

export async function addRecept(
    recept: Omit<Recept, 'id'>
): Promise<Recept>{
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recept),
    });
    return res.json();
}
