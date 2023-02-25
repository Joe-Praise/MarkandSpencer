import React from 'react'
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import Filter from '../shopComponents/Filter'
import ProductCard from '../shopComponents/ProductCard'
import WomensDayToNightOutfit from '../shopComponents/WomensDayToNightOutfit'

const Shop = () => {
  return (
    <section className='shopPage'>
      <Navigation/>
      <WomensDayToNightOutfit />
      <Filter />
      <ProductCard />
      <Footer/>
    </section>
  )
}

export default Shop