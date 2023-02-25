import React from 'react'
import GridLayout from './GridLayout'
import grid1 from "../../images/womenPage/grid_1.webp";
import grid2 from "../../images/womenPage/grid_2.webp";
import grid3 from "../../images/womenPage/grid_3.webp";
import grid4 from "../../images/womenPage/grid_4.webp";

const WomenBgGrid = () => {
  return (
    <div className='bg_grid'>
        <GridLayout img={grid1} text1={"Love is all around"} text2={"Shop day-to-night outfit"} />
        <GridLayout img={grid2} text2={"Handbags"} />
        <GridLayout img={grid3} text2={"Ankle boots"} />
        <GridLayout img={grid4} text2={"Dresses"} />
    </div>
  )
}

export default WomenBgGrid