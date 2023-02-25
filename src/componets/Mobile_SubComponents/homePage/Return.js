import React from 'react'

const Return = ({back}) => {
  return (
		<li className="returnBack" onClick={back}>
			<i className="fa-solid fa-arrow-left"></i> All Departments
		</li>
  );
}

export default Return;