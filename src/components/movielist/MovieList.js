import React from 'react'
import './movielist.css'




import Movie from './movie/Movie';


const MovieList = (props) => {      
    
    const { movies , isLoading } = props; 
    
    if(isLoading) {
        return (
                <div data-testid="movie-list-spinner" className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
    }   
    
    return (
        <table className="table table-dark movie-list-container">
            <thead className="thead-darker">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Released</th>
                <th scope="col">Genre</th>
                <th scope="col">min.</th>
                <th scope="col">Rating</th>
                </tr>
            </thead>
            <tbody>
                {movies ? renderMovies(movies) : renderDarkAlert('no data found')}
            </tbody>
        </table>
    )       
}

const renderMovies = (movies) => {
    return movies.map((movieData,i) => {
        return <Movie key={i} index={i} movie={movieData} />
    })
}


const renderDarkAlert = (message) => {
    return (
        <tr className="alert alert-dark" role="alert">
            <td>{message}</td>
        </tr>
    )
}

export default MovieList


