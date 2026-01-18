import type { Dogodek } from "../types";
import axios from "axios";

const api = axios.create(
    {baseURL: "http://localhost:3000/seznam"}
)

export async function getDogodek(): Promise<Dogodek[]>{
    const res = await api.get<Dogodek[]>("/");
    return res.data;
}

export async function addDogodek(
    dogodek: Omit<Dogodek, "id">
): Promise<Dogodek>{
    const res = await api.post<Dogodek>("/", dogodek);
    return res.data;
}