import React, { useState, useEffect } from 'react';
import BtnSlider from './NewBtnSlider';
import dataSlider from './dataSlider';
import { Link } from 'react-router-dom';
const Slider = () => {
	const [sliderIndex, setSliderIndex] = useState(1);
	const nextSlide = () => {
		if (sliderIndex !== dataSlider.length) {
			setSliderIndex(sliderIndex + 1);
		} else if (sliderIndex === dataSlider.length) {
			setSliderIndex(1);
		}
	};

	const prevSlide = () => {
		if (sliderIndex !== 1) {
			setSliderIndex(sliderIndex - 1);
		} else if (sliderIndex === 1) {
			setSliderIndex(dataSlider.length);
		}
	};

	const moveDot = (index) => {
		setSliderIndex(index);
	};

	useEffect(() => {
		let timer;
		timer = setInterval(() => {
			setSliderIndex(sliderIndex + 1);
			if (sliderIndex === dataSlider.length) {
				setSliderIndex(1);
			}
		}, 5000);
		return () => clearInterval(timer);
	});

	return (
		<div className='bg_white'>
			<div className='container-slider'>
				{dataSlider.map((data, index) => {
					return (
						<figure
							className={
								sliderIndex === index + 1 ? 'slide active-anim' : 'slide'
							}
							key={data.id}
						>
							<Link to='/women'>
								<img
									src={
										process.env.PUBLIC_URL +
										`/container/DESKTOP_HERO_${index + 1}.webp`
									}
									alt='background images as links to different product sections'
								/>
							</Link>
							<div className='carousel_links'>
								<p>
									<Link to='/women' className='bg_links'>
										{data.link1}
										<i className='fa-solid fa-arrow-right'></i>
									</Link>
								</p>
								<p>
									<Link to='/women' className='bg_links'>
										{data.link2}
										<i className='fa-solid fa-arrow-right'></i>
									</Link>
								</p>
							</div>
						</figure>
					);
				})}
				<BtnSlider moveSlide={nextSlide} direction={'next'} />
				<BtnSlider moveSlide={prevSlide} direction={'prev'} />
				<div className='container-dots'>
					{Array.from({ length: 3 }).map((item, index) => (
						<div
							onClick={() => moveDot(index + 1)}
							className={sliderIndex === index + 1 ? 'dot active' : 'dot'}
							key={index}
						></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Slider;
