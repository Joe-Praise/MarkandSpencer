import React from 'react'

const DesktopInput = () => {
  return (
		<form className="input">
			<div>
				<input
					type="text"
					placeholder="From clothes to beauty,  We have it all"
				/>
				<button>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</form>
  );
}

export default DesktopInput