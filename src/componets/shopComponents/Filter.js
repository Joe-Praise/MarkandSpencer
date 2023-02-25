import React from 'react'
import FilterDropDown from './FilterDropDown';

const Filter = () => {
  const openDiv = (e) => {
    let target = e.target.parentElement.nextElementSibling;
    target.style.left="0%"
    console.log(target)

  }
  return (
    <div>
        <div className='Fliterdisplay'>
            <p onClick={openDiv}>Filter</p>
        </div>   
      <FilterDropDown/>
    </div>
  )
}

export default Filter;
