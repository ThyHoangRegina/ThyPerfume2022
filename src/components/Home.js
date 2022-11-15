import React from 'react';
import './Home.css';
import { GiOwl } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import byredohome from './Asset/byredohome.jpg';
import homeslidetwo from './Asset/discoverset.jpg';
import homeslidethree from './Asset/diptyque.png';
import Filter from './Filter.js';
import Productlist from './Productlist.js';
import Footer from './Footer.js';
import { useSelector } from 'react-redux';


export default function Home() {
    return(
        <div className='home'>
            <ImageSlider/>
            <Filter/>
            <Productlist/>
            <Footer/>
        </div>
    )
}

export function Nav(){
    const cartSelector = (state)=> {return state.carts};
    const cartListStore = useSelector(cartSelector);
    return(
        <div className='nav'>
            <GiOwl className='nav--icon'/>
            <div className='nav--title'>THY</div>
            <div className='nav--icon'>
                <HiOutlineShoppingCart className='nav--icon--cart'/>
                <span className='cart'>{cartListStore.length}</span>
            </div>
        </div>
    )
}

export function ImageSlider(){
    var settings = {
        dotsClass: 'slick-dots',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplayspeed: 3000
      };
    return(
        <Slider {...settings} className="imageslider">
            <div className='slide'>
                <Slideone/>
            </div>
            <div className='slide'>
                <Slidetwo/>
            </div>
            <div className='slide'>
                <Slidethree/>
            </div>
        </Slider>
    )
}

 function Slideone (){
    return(
        <div className='slideone'>
            <div className='slideone--left'>
                <div className='slideone--intro'>
                    <p>Let's find your</p>
                    <h>SIGNATURE SCENT</h>
                    <div className='slideone--deco'></div>
                    <p>Perfume is like a new dress. It makes you quite simply marvelous.</p>
                    <button className='slide--btn'><a href='#productlist'>Shop now!</a></button>
                </div>
            </div>
            <div className='slideone--right'>
                <img src={byredohome} alt='anh nuoc hoa'/>
            </div>
        </div>
    )
 }

 function Slidetwo(){
    return(
        <div className='slidetwo'>
            <div className='slidetwo--left'>
                <img src={homeslidetwo} alt='anh quang cao' className='slidetwo--picture'/>
            </div>
            <div className='slidetwo--right'>
                <h>New arrival!</h>
                <div></div>
                <button className='slide--btn'>Shop now!</button>
            </div>
        </div>
    )
 }

 function Slidethree (){
    return(
        <div className='slidethree'>
            <div className='slidethree--title'>END OF SEASON SALE</div>
            <img src={homeslidethree} alt='anh quang cao' className='slidethree--picture'/>
        </div>
    )
 }