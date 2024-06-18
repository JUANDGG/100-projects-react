import results from '../../mocks/results.json';


//childs components
import ListMovies from './ListMovies';
import NoResultsMovies from './NoResultsMovies.jsx';



ListMovies

// todo lo que renderize algo o use react o jsx debe ser un componenete 
function MoviesContext(){
    const movies =results.Search;
    const validateMovies = movies.length>0;

    return(
        <main>
            {validateMovies ? <ListMovies movies={movies}/> : <NoResultsMovies text='No results found'/>}
        </main>
    )
}

export default MoviesContext;