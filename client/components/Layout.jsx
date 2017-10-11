import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import PlayerRoutes from './Players/PlayerRoutes'

function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              <Home />}
          />
          <Route
            path='/players'
            component={PlayerRoutes}
          />
        </Switch>
      </div >
      <div className="footer center">
        <Footer />
      </div>
    </div>
  )
}
module.exports = Layout
