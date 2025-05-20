import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Trending from './components/Trending'
import Middle from './components/Middle'
import List from './components/List'
import Recent from './components/Recent'
import Connect from './components/Connect'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Trending/>
      <Middle/>
      <List/>
      <Recent/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default App