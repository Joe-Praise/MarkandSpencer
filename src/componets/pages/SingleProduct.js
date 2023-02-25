import React from 'react'
import Footer from '../../Footer'
import Navigation from '../../Navigation'
import SingleProductCard from '../single product/SingleProductCard'
import SingleProductFindInStore from '../single product/SingleProductFindInStore'
import SingleProductReview from '../single product/SingleProductReview'
import SingleProductTopLinks from '../single product/SingleProductTopLinks'
import SizeChart from '../single product/SizeChart'



const SingleProduct = () => {
  return (
    <section>
      <Navigation/>
      <div className='singleProduct'>
          <SingleProductTopLinks />
          <SingleProductCard/>
          <SingleProductFindInStore />
          <SizeChart />
          <SingleProductReview/>
        </div>
      <Footer/>
    </section>
  )
}

export default SingleProduct