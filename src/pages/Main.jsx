import React from 'react'

import SwiperImage from '../components/SwiperImage'
import Cards from '../components/Cards'

const Main = () => {
  return (
    <>
      <h1 className='text-center text-[30px] mt-10 font-bold'>Shop Products</h1>
      <div className='mb-10 mt-5'><SwiperImage /></div>
      <div className='my-10'><Cards /></div>
    </>
  )
}

export default Main
