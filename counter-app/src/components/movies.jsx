import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
  state = {
    movies: getMovies(),
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>RentalRate</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.state.movies).map((row_, index) => (
            <tr>
              {Object.values(row_).map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
          ;
        </tbody>
      </table>
    )
  }
}

export default Movies
