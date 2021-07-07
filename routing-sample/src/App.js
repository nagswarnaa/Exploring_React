import logo from './logo.svg'
import './App.css'
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import NavBar from './components/navbar'
import Products from './components/products'
import Posts from './components/posts'
import Dashboard from './components/admin/dashboard'
import Home from './components/home'
import NotFound from './components/notFound'
import ProductDetails from './components/productDetails'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" exact component={ProductDetails} />

            <Route
              exact
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            ></Route>
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/notFound" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/notFound" />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
