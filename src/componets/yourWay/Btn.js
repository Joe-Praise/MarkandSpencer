import React from 'react'

const Btn = ({shade, bg, value, border}) => {
    const btnStyle = {
        color: shade,
        width: "100%",
        border: `1px solid ${border}`,
        backgroundColor: bg,
        padding: "15px 10px",
    }
  return (
    <div className='btn'>
        <button style={btnStyle}>{value}</button>      
    </div>
  )
}

export default Btn