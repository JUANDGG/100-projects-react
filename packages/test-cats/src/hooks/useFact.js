import {useEffect, useState } from "react";
import fetchinFact from "../services/fetchinFact.js";


//los custom hook no pueden ir atados ala implementacion o lo que hace por dentro , no podemos darle un  nombre que te diga la implementacion que  tiene nuestro custom hook , por que lo que hace el custom hook puede cambiar
function useFact() {
    const [fact, setFact] = useState("...loading");

    const refrestFact =()=>{
        const fetchData = fetchinFact();
        fetchData.then(res => {
            setFact(res);
        });
    }

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            refrestFact()
        }
        return () => {
            isMounted = false;
        };
    }, []);

    return { fact ,refrestFact };
}


export default useFact;