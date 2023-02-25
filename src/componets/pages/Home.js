import React, { useEffect } from 'react'
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import HomeCircularScroll from '../media scroller/HomeCircularScroll'
import MsFavourites from '../cards/MsFavourites/MsFavourites'
import Brands from '../brands/Brands'
import NewSlideShow from '../new arrivals/NewSlideShow'
import TopPick from '../cards/Top pick section/TopPick'
import Inspire from '../inspireMe/Inspire'
import MoreFrom from '../more from m&s/MoreFrom'
import Delivery from '../Delivery/Delivery'
import Yourway from '../yourWay/Yourway'
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import Slider from '../Slider.js/Slider'
const Home = () => {
	const { getUsers, getProducts } = useContext(AppContext);

	useEffect(() => {
		getProducts()
		getUsers()
	},[])
  return (
		<section className="home">
				<Navigation />
				<Slider />
				<HomeCircularScroll />
				<MsFavourites />
				<TopPick />
				<Brands />
				<NewSlideShow />
				<Inspire />
				<MoreFrom />
				<Delivery />
				<Yourway />
		  <div className='footer_alt'>
				<Footer />
		  </div>
		</section>
  );
}

export default Home