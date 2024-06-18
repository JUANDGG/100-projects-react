import results from '../../mocks/results.json';


//childs components
import ListCardsMovies from './ListCardsMovies.jsx';
//import NoResultsMovies from './NoResultsMovies.jsx';





// todo lo que renderize algo o use react o jsx debe ser un componenete 
function MoviesContext(){
    const movies =results.Search;
    ///const validateMovies = movies.length>0;

    return(
        <main>
            <ListCardsMovies movies={movies}/> 
        </main>
    )
}

export default MoviesContext;