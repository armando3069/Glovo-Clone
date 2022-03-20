import { useState } from 'react'
import Intro from './components/intro/intro.jsx'
import Product from './components/products/product'
import Deliver from './components/deliver/deliver.jsx'
import Top from './components/Top/top.jsx'
import Down from './components/downland/down.jsx'
import Review from './components/review/review.jsx'
import './App.css'

function App() {


  return (
    <div className="App">
    <Intro/>
    <Product/>
    <Deliver/>
    <Top/>
    <Down/>
    <Review/>
    </div>
  )
}

export default App
