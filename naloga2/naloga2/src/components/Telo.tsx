import Igralec from "./Igralec";
import Opozorilo from "./Opozorilo";
import Info from "./Info"

export default function Telo(){
    const igralci = [1, 2, 3, 4, 5]

    return(
        <>
        <div>
            {igralci.length < 11 ? <Opozorilo/> : <Info/>}
            {igralci.map((_, index) => (<Igralec key={index} />))}
        </div>
        </>
    );
}