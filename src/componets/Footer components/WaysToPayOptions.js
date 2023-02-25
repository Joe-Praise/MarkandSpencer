import React from 'react'

const WaysToPayOptions = ({alt, img}) => {
  return (
    <div className='ways_to_pay_provider'>
          <figure>
              <img src={img} alt={alt} />
          </figure>     
    </div>
  )
}

export default WaysToPayOptions