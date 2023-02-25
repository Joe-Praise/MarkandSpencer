import React from 'react';

const FilterDropDownForm = ({display,options}) => {
    const style = {
        display: display
    }
  return (
		<form className="panel2 panel">
			<div style={style} className="filterSearch">
				<input type="search" placeholder="Search" />
			</div>
			<div className="checkbox_container">
              {options.map((option) => (
                  <div key={option.id} className="checkbox">
                      <label>
                          <input type="checkbox" />
                          {option.item}
                        <span>({option.quantity})</span>
                      </label>
                  </div>
              ))}
          </div>
		</form>
  );
}

export default FilterDropDownForm