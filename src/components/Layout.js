import React from 'react';
import './Layout.css';
import { GiOwl } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { Outlet, Link } from "react-router-dom";

export default function Layout(){
    return(
        <div>
            <Nav/>
            <Outlet/>
        </div>
    )
}

export function Nav(){
    const cartSelector = (state)=> {return state.carts};
    const cartListStore = useSelector(cartSelector);
    return(
        <div className='nav'>
            <GiOwl className='nav--icon'/>
            <div className='nav--title'>
                <Link className='link' to="/">THY</Link>
            </div>
            <div className='nav--icon'>
                <Link className='link' to="/cart"><HiOutlineShoppingCart className='nav--icon--cart'/></Link>
                <span className='cart'>{cartListStore.length}</span>
            </div>
        </div>
    )
}