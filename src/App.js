import { useEffect, useState } from  'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

// 7169cbc9

//const API_URL = 'http://www.omdbapi.com?apikey=1baa93dc';
const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=5879621db1390167d0a98990945142a1'

// Movie object of Spiderman
//Static data --> We need to pull all data from the API
const movie1 = {
    "adult": false,
    "backdrop_path": "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    "genre_ids": [
        12,
        18,
        878
    ],
    "id": 157336,
    "original_language": "en",
    "original_title": "Interstellar",
    "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    "popularity": 122.037,
    "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "release_date": "2014-11-05",
    "title": "Interstellar",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 30010
}

const App =  () => {

    // useState hook --> Sets an an array of movies in the API in which we can Search.
    // Always use [variable, setVariable]
    // Default value of movies is an empty array --> useState([]);
    const [movies, setMovies] = useState([]); 

    // Setting the search bar:
    // Pass in an empty string: useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // async, response and data are responsible for accessing the API.
    const searchMovies = async (title) => {
        let url = ''.concat(API_URL, '&query=', searchTerm);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setMovies(data.results);
    }

    // Executes as soon as the page loads. This is one of the hooks
    useEffect(() => {
        searchMovies('Batman');
    }); 

    // className isntantiates a .css class already written or an empty one that doesn't exist.
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder = "Search For Movies"
                    value = {searchTerm} // Value is dynamic because of useState
                    onChange = {(e) => setSearchTerm(e.target.value)} // event for searching
                />
                <img 
                    src = {searchIcon}
                    alt = "search"      // alt gives an alternate name for the image --> Written inside the first triangle bracket of element img.
                    onClick = {() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">    
                        {movies.map((movie) => (
                            <li key={movie.id} >
                                <MovieCard movie={movie} />
                            </li>
                        ))} 
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
                )}
            
        </div>
    );
}

export default App;