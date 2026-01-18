import { Link } from "react-router-dom";
import { ekipe } from "../podatki";

export default function SeznamEkip() {
    return(
        <>
            <h1>Seznam Ekip</h1>
            <ul>
                {ekipe.map((ekipa) => (
                    <li key={ekipa.id}>
                        {/* We link to the route defined in main.tsx */}
                        <Link to={`/ekipa/${ekipa.id}`}>
                            {ekipa.ime}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}