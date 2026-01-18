import type { Knjiga } from "../types";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/seznam",
})

export async function getKnjige(): Promise<Knjiga[]>{
    const res = await api.get<Knjiga[]>("/");
    return res.data;
}

export async function addKnjiga(
    knjiga: Omit<Knjiga, "id">
): Promise<Knjiga>{
    const res = await api.post<Knjiga>("/", knjiga);
    return res.data;
}