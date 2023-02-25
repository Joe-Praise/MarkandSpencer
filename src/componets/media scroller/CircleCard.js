import React from 'react'
import { Link } from 'react-router-dom'
const CircleCard = ({pic, text}) => {
  return (
      <div className='circular_cards'>
          <Link to="" className='pages_link'>
            <figure>
              <img src={pic} alt="media scroll" />
            </figure>  
            <p>{text}</p>
          </Link>
    </div>
  )
}

export default CircleCard