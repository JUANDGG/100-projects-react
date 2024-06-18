import useMovies from '../../hooks/useMovies.js';
import apisMoviesStructure from '../../util/apisMoviesStuture.js';

function ListCardsMovies({movies}) {
    const {dataMovie, errorDataMovie } = useMovies({ movies, structure :apisMoviesStructure.api_iomdb_movie_struture.compact_data_cards});
    

    return (
        <>
            {errorDataMovie!=null ? (
                
                <p>{errorDataMovie}</p>
            ) : (
                <ul>
                    {dataMovie.map(movie => (
                        <li key={movie.id}>
                            <p>{movie.title}</p>
                            <img src={movie.poster} alt={movie.title} />
                            <h3>{movie.year}</h3>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default ListCardsMovies;