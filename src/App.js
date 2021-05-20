import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route, Switch}from "react-router-dom"
import Home from "../src/components/pages/Home"
import Services from "../src/components/pages/Services"
import Product from "../src/components/pages/Products"
import SignUp from "../src/components/pages/Sign-up"



function App() {
  return (
   <>
   <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Product} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
   </>
  )
}

export default App
