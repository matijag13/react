export default function Igralec(){
    const ime: String = 'Matija';
    const stevilka: number = 23;
    const aktiven: boolean = true;


    return(
        <div>
            <p>Ime: {ime}</p>
            <p>stevilka: {stevilka}</p>
            <p>{aktiven ? "Aktiven" : "Poškodovan"}</p>
        </div>
    );
}