import React from 'react'
import SearchPopUp from './SearchPopUp';

const Search = () => {
    const searchContainer =(e)=> {
        e.preventDefault();
        // make the search work at the end of the design
        let target = e.target.parentElement.parentElement.nextElementSibling;
        target.style.display = "block";

    }
    return (
		<div>
			<form className="searchForm" onClick={searchContainer}>
				<div className="search_container">
					<input
						type="text"
						placeholder="Search Product, code or brand"
						disabled
					/>
					<button>
						<i className="fa-solid fa-magnifying-glass"></i>
					</button>
				</div>
			</form>
			<SearchPopUp />
		</div>
	);
}

export default Search