function ListMovies({ movies }) {
    //evitar el contrato con la api para esto podremos mapear los datos

    const mappedMovies =movies.map(movie=>({
       id:movie["imdbID"],
       title :movie["Title"],
       poster :movie["Poster"],
        year :movie["Year"]
    }));

    console.log(mappedMovies)

    return (
        <ul>
            {mappedMovies.map(movie => (
                
                movie.Poster !== "N/A" && (
                    <li key={movie.id}>
                        
                        <p>{movie.title}</p>
                        <img src={movie.poster} alt='no img' />
                        <h3>{movie.year}</h3>
                    </li>
                )
            ))}
        </ul>
    );
}


export default ListMovies