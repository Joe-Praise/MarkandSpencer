import React from 'react'
import MsFavouritesCard from '../cards/MsFavourites/MsFavouritesCard'
import img1 from "../../images/homePage/inspire_me_1.webp"
import img2 from "../../images/homePage/inspire_me_2.webp"
import img3 from "../../images/homePage/inspire_me_3.webp"

const Inspire = () => {
  return (
    <div className='padding inspire_container'>
        <h2>Inspire me</h2>
        <div className='inspire_cards_container'>
            <MsFavouritesCard img={img1} description="send love to their doorstep" redirect="Best blooms, as chosen by the experts" />
            <MsFavouritesCard img={img2} description="Top valentine's day gifts, live" redirect="Watch and shop now" />
            <MsFavouritesCard img={img3} description="Gorgeous gift ideas to make their day" redirect="Read the guide" />
        </div>
    </div>
  )
}

export default Inspire