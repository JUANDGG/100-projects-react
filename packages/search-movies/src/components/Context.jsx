
//Childs components
import Header from "./Header/Header"
//import MoviesContext from "./MoviesContext/MoviesContext";
import ListCardsMovies from './MoviesContext/ListCardsMovies';


function Context(){

    

    return (
        <>
            <Header titleHeader='GuizMovie' />
            <main>
                <ListCardsMovies movies={{}} /> 
            </main>
            {/*
            
            <MoviesContext/>
            */ }
        </>
    )
}

export default Context;