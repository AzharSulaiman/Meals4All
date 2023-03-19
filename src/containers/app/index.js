import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Request from '../request'
import Donate from '../donate'

const App = () => (
  <div>
    <header>
      <h1>Home</h1>
      {/* <Link to="/">Home</Link>
      <Link to="/requests">Request</Link>
      <Link to="/donate">Donate</Link> */}
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/requests" component={Request} />
      <Route exact path="/donate" component={Donate} />
    </main>
  </div>
)

export default App
