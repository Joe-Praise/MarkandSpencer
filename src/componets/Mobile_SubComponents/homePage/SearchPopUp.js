import React from 'react'
import ms_icon from "../../../images/homePage/M&S_LOGO.svg";
import { Link } from 'react-router-dom';
const SearchPopUp = () => {
    const hideSearch = (e) => {
        let cancel = e.target.parentElement.parentElement;
        cancel.style.display = "none";
        console.log(cancel);
    }
    const homePage = (e) => {
       let target = e.target.parentElement.parentElement.parentElement;
        target.style.display = "none";
    }

    const search = (e) => {
        e.preventDefault();
    }

  return (
		<div className='searchPopUp_container'>
          <div className="search_popup_header">
              <Link to="" >
				<img src={ms_icon} alt="M&S Logo" onClick={homePage}/>
              </Link>
				<i className="fa-solid fa-x" onClick={hideSearch}></i>
			</div>
			<form className="searchForm">
				<div className="search_container">
                    <button onClick={search}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
					<input
						type="text"
						placeholder="Search Product, code or brand"
					/>
				</div>
			</form>
		</div>
  );
}

export default SearchPopUp