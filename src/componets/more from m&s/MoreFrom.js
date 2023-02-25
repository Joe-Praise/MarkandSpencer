import React from 'react'
import MoreCard from "./MoreCard";
import img1 from "../../images/homePage/more_MS_1.webp"
import img2 from "../../images/homePage/more_MS_2.webp"
import img3 from "../../images/homePage/more_MS_3.webp"
import img4 from "../../images/homePage/more_MS_4.webp"
import img5 from "../../images/homePage/more_MS_5.webp"
import img6 from "../../images/homePage/more_MS_6.webp"

const MoreFrom = () => {
  return (
      <div className='more_container'>
        <h2>More from m&s</h2>
        <div className='more_cards_container snaps_inline'>
            <MoreCard img={img1} description="Book your bra fit" />
            <MoreCard img={img2} description="Gift cards"/>
            <MoreCard img={img3} description="Look behind the label"/>
            <MoreCard img={img4} description="M&S food available at ocado"/>
            <MoreCard img={img5} description="Travel Money"/>
            <MoreCard img={img6} description="M&S Opticians"/>
        </div>
    </div>
  )
}

export default MoreFrom