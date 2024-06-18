
//Childs components
import Header from "./Header/Header"
import MoviesContext from "./MoviesContext/MoviesContext";
function Context(){
    return (
        <>
            <Header titleHeader='GuizMovie'/>
            <MoviesContext/>
        </>
    )
}

export default Context;