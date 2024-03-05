import React from 'react'
import HomeSlider1 from '../components/HomeSlider1'
import AllProducts from '../components/AllProducts'
function index() {
  return (
    <div>
      <HomeSlider1/>
      <h1 className='text-4xl text-center text-black py-8 drop-shadow-lg'>"Shop Your Vibe, Feel the Cart, Discover Your Perfect Groove with Vibecart"</h1>
      <div className="">
      <AllProducts/>
      </div>
    </div>
  )
}

export default index