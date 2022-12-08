import React from 'react';
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import Grid from "../components/Grid"
import Footer from "../components/Footer"
import HomeGrid from "../components/homegrid"

const Home = () => {
return (
	<div>
	<Navbar/>
    <Carousel/>
	<HomeGrid/>
    <Grid/>
	<Footer/>
	</div>
);
};

export default Home;

