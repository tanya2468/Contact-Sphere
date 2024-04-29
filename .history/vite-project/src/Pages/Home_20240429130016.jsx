import React from 'react'
import Navbar from '../Components/Navbar'
import '../assets/css/home.css' 
const Home = () => {
  return (
    <>
    <Navbar />
    <div className='home'>
      <h1 className='home-title'>
        CONTACT SPHERE
      </h1>
      <p className='home-description'>
            Collecting your contacts in a very smarter way.
      </p>
    </div>
    </>
  )
}

export default Home
