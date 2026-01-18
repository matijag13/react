import type {Dogodek} from "../types";


interface Props{
    dogodek: Dogodek;
    onBack: () => void;
}

export default function DogodekDetail({dogodek, onBack}: Props){
    return(
        <>
            <button onClick={onBack}>Nazaj na seznam</button>
            <p>{dogodek.naziv}</p>
            <p>{dogodek.datum}</p>
            <p>{dogodek.lokacija}</p>
        </>
    );
}