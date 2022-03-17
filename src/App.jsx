import { useState } from 'react'
import Intro from './components/intro/intro.jsx'
import Product from './components/products/product'
import './App.css'

function App() {


  return (
    <div className="App">
    <Intro/>
    <Product/>
    </div>
  )
}

export default App
