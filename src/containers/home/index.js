import React from 'react'
import { Link } from 'react-router-dom'
 

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/requests">Request</Link>
  </div>
)

export default Home
