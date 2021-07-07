import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Like from './like'
import Table from '../components/table'
class MoviesTable extends Component {
  columns = [
    {
      name: 'title',
      label: 'Title',
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { name: 'genre.name', label: 'Genre' },
    { name: 'numberInStock', label: 'Stock' },
    { name: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: 'delete',
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          delete
        </button>
      ),
    },
  ]

  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props
    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={movies}
      />
    )
  }
}

export default MoviesTable
