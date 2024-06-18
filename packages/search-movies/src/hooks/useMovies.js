import { useState, useEffect } from "react";


const isValidStructure = (structure) => {
    return Object.keys(structure).length > 0;
};


const formatMovies = ({ movies , structure}) => {
    const moviesArray = Object.values(movies); 
    return moviesArray.map(movie => {
        let formattedMovie = {};
        Object.keys(structure).forEach(key => {
            formattedMovie[key] = movie[structure[key]];
        });
        return formattedMovie;
    });
};

export default function useMovies({ movies, structure }) {
    const [dataMovie, setDataMovie] = useState([]);
    const [errorDataMovie, setErrorDataMovie] = useState(undefined);

    useEffect(() => {
        if (isValidStructure(structure)) {
            setErrorDataMovie(" ! There are no movies to show.");
        }

        const formattedMovies = formatMovies({ movies, structure });
        setDataMovie(formattedMovies);
    },[]);

    return { dataMovie, errorDataMovie };
}