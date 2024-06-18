function ListMovies({ movies }) {
    return (
        <ul>
            {movies.map(movie => (
                movie.Poster !== "N/A" && (
                    <li key={movie.imdbID}>
                        
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt='no img' />
                        <h3>{movie.Title}</h3>
                    </li>
                )
            ))}
        </ul>
    );
}


export default ListMovies