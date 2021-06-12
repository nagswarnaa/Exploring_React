import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Like from './like'
import Pagination from '../components/pagination'

class Movies extends Component {
  state = {
    movies: getMovies(),
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id)
    this.setState({ movies })
  }
  handleLike = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movies[index] }
    movies[index].liked = !movies[index].liked
    this.setState({ movies })
  }

  render() {
    if (this.state.movies.length === 0)
      return <h1>There are no movies in database</h1>
    return (
      <div>
        <p> Showing {this.state.movies.length} movies in database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.rate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination itemsCount={this.state.movies.length} />
      </div>
    )
  }
}

export default Movies
