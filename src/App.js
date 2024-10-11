import React from 'react'
import './index.css';
import Header from './components/common/Header'
import Banner from './components/Banner'
import Con2 from './components/WMADev'
import Con3 from './components/DSCon'
import Con4 from './components/FAQ'
import Footer from './components/common/Footer'



const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Con2/>
      <Con3/>
      <Con4/>
      <Footer/>
    </div>
  )
}

export default App

