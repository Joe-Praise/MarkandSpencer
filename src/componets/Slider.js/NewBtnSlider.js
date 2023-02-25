import React from 'react'
import nextArrow from "./icons/right_arrow.png"
import prevArrow from "./icons/previous_arrow.jpg"
const NewBtnSlider = ({ moveSlide , direction}) => {
    return (<div>
        <button
            onClick={moveSlide}
        className={ direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img
                src={direction === "next" ? nextArrow : prevArrow}
                alt=""
            />
        </button>  
    </div>
    );
};

export default NewBtnSlider