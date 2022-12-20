// Code for using individual movie1 object instead of MovieCard which takes the whole API databse into account.
<div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img
                            // if poster is N/A Than apply the specified poster in object. Else use the placeholder 
                            src = {movie1.Poster !== 'N/A' ? movie1.Poster : 'https://www.shortlist.com/media/imager/201905/22154-posts.article_lg.jpg'} alt = {movie1.Title}
                        />
                    </div>
                    <div> 
                        {/* The <span> tag is an inline container used to mark up a part of a text, or a part of a document. */} 
                        <span>{movie1.Type}</span> 
                        <h3>{movie1.Title}</h3>
                    </div> 
                
                </div> 