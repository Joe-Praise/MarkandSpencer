import React from 'react'
import { Link } from "react-router-dom";

const InspireMeDropDownComponent = ({p1,img, imgCaption, p2, link}) => {
  return (
      <li className='inspireMe_card'>
        <p className='topP-tag'>{p1}</p>
        <figure>
            <Link to="">
            <img src={img} alt="" />
            </Link>
            <figcaption>{imgCaption}</figcaption>
        </figure>
        <p>{p2}</p>
        <Link to="" className='inspireMe_link'>{link}</Link>
    </li>
  )
}

export default InspireMeDropDownComponent