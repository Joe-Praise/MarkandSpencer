import React from 'react'

const SizeChartInfoComp = ({title, body}) => {
  return (
		<div className="sizeChart_info">
          <p className="size_header">{title}</p>
          <p>{body}</p>
		</div>
  );
}

export default SizeChartInfoComp