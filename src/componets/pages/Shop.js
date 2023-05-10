import React from 'react'
import Filter from '../shopComponents/Filter'
import ProductCard from '../shopComponents/ProductCard'
import WomensDayToNightOutfit from '../shopComponents/WomensDayToNightOutfit'

const Shop = () => {
  return (
    <section className='shopPage'>
      <WomensDayToNightOutfit />
      <Filter />
      <ProductCard />
    </section>
  )
}

export default Shop