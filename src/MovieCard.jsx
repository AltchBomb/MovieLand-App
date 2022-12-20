// This file serves as a React component for all the movies.
// Preferably write these components in .jsx files instead of .js files. They are in essence the same --> Just better practice

import React from 'react';

// Component with a functional component:
// Good prcatice to make file name and component name the same.
// Make use of props in functional component argument to access all movies on API instead of just movie.
// (props) = ({movie})
const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
                    <div>
                        <p>{movie.release_date}</p>
                    </div>
                    <div>
                        <img
                            // if poster is N/A Than apply the specified poster in object. Else use the placeholder 
                            src = {movie.poster_path !== 'N/A' ? ''.concat('https://image.tmdb.org/t/p/original', movie.poster_path) : 'https://www.shortlist.com/media/imager/201905/22154-posts.article_lg.jpg'} alt = {movie.title}
                        />
                    </div>
                    <div>
                        {/* The <span> tag is an inline container used to mark up a part of a text, or a part of a document. */}
                        <span>{movie.original_language}</span> 
                        <h3>{movie.title}</h3>
                    </div>

                </div>
    )
}

export default MovieCard;