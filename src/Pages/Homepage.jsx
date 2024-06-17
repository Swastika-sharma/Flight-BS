import React from 'react'
import Navbar from '../components/Navbar';
import Searchform from '../components/Searchform';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Recommend from '../components/Recommend';

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Searchform/>
      <FAQ/>
      <Recommend/>
      <Footer/>
    </div>
  )
}

export default Homepage