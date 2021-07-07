import logo from './logo.svg'
import { React, Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar'
import Movies from './components/movies'
import Customer from './components/customers'
import Rentals from './components/rentals'
import MovieForm from './components/movieForm'
import NotFound from './components/notFound'
import './App.css'
import LoginForm from './components/login'

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customer} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movieform" component={MovieForm} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/login" component={LoginForm} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    )
  }
}

export default App
