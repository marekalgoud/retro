import React from "react"

import { Router } from "@reach/router"
import Home from './pages/Home'
import Profile from './pages/Profile'

import './App.css';


function App() {

  return (
    <Router>
      <Home path="/" />
      <Profile path="profile" />
    </Router>
  )
}

export default App
