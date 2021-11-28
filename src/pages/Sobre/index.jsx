import { useEffect, useState, useCallback } from "react";
import { formataValor } from "../../components/Main";
import { useHistory, Link } from "react-router-dom";



export const Sobre = () => {

     const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return(
        <>

            <h1 className="text-center">Sobre</h1>

            
        </>
    )
}