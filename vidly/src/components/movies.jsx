import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Pagination from '../components/pagination'
import { paginate } from '../utils/paginate'
import ListGroup from '../components/listGroup'
import MoviesTable from '../components/moviesTable'
import { getGenres } from '../services/fakeGenreService'
import _ from 'lodash'
import Like from './like'

class Movies extends Component {
  state = {
    allmovies: [],
    genres: [],
    pagesize: 3,
    currentPage: 1,
    sortColumn: { name: 'title', order: 'asc' },
  }
  handleDelete = (movie) => {
    const allmovies = this.state.allmovies.filter((m) => m._id !== movie._id)
    this.setState({ allmovies })
  }
  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()]
    this.setState({ allmovies: getMovies(), genres })
  }
  handleLike = (movie) => {
    const allmovies = [...this.state.allmovies]
    const index = allmovies.indexOf(movie)
    allmovies[index] = { ...allmovies[index] }
    allmovies[index].liked = !allmovies[index].liked
    this.setState({ allmovies })
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }
  handleSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }
  handleSort = (sortColumn) => {
    this.setState({ sortColumn })
  }
  paginatedData = () => {
    const {
      pagesize,
      currentPage,
      selectedGenre,
      allmovies,
      sortColumn,
    } = this.state
    const filtered =
      selectedGenre && selectedGenre._id
        ? allmovies.filter((m) => m.genre._id === selectedGenre._id)
        : allmovies
    const sorted = _.orderBy(filtered, [sortColumn.name], [sortColumn.order])
    const movies = paginate(sorted, currentPage, pagesize)
    return { totalCount: filtered.length, data: movies }
  }

  render() {
    const { length: count } = this.state.allmovies
    const { pagesize, currentPage } = this.state

    const { totalCount, data: movies } = this.paginatedData()
    if (movies.length === 0) return <h1>There are no movies in database</h1>
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p> Showing {totalCount} movies in database</p>
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pagesize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    )
  }
}

export default Movies
