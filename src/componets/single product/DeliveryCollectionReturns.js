import React from 'react'

const DeliveryCollectionReturns = ({head, img, text1, text2}) => {
  return (
    <div className='delivery_collection_return_container'>
        <p className='bold'>{head}</p>
        <div className='img_container'>
            <figure>
                <img src={img} alt="svg illustration of a delivery truck" />
            </figure>
            <div className='right_text'>
                <p>{text1}</p>
                <p className="bold">{text2}</p>
            </div>
        </div>
    </div>
  )
}

export default DeliveryCollectionReturns;