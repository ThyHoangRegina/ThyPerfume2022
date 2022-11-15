import React, { useState } from 'react';
import {Cartmoneyslice, Cartslice} from './Redux/Reducer.js';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { MdOutlineClose } from "react-icons/md";
import nestindigo from './Asset/nestindigo.jpg';
import thenoir from './Asset/thenoir.jpg';
import nestpoppy from './Asset/nest-wild-poppy.jpg';
import mixed from './Asset/byredo-mixed.jpg';
import ysllibre from './Asset/ysllibre.png';
import vilbasil from './Asset/vilbasil.jpg';
import sundazed from './Asset/byredo-sundazed.jpg';
import rose from './Asset/killian-roses-on-ice.jpg';
import flowerhead from './Asset/byredo-flowerhead.jpg';
import youngrose from './Asset/byredo-youngrose.jpg';
import memoire from './Asset/gucci-memoire.jpg';
import autumnvibe from './Asset/autumn-vibes.jpg';
import tamdao from './Asset/tamdao.png';

export default function Cart(){
    const cartSelector = (state)=> {return state.carts};
    const cartListStore = useSelector(cartSelector);
    
    return(
        <div className='cartpage'>
            <div className='cartpage--container'>
                <h>MY SHOPPING CART</h>
                <Cartpagelist/>
                <div className='cartpage--end'>
                    <div>Items: {cartListStore.length}</div>
                    <div>Total:</div>
                </div>
            </div>
        </div>
    )
}

function Cartpagelist(){
    const cartSelector = (state)=> {return state.carts};
    const cartListStore = useSelector(cartSelector);
    return(
        <div className='cartpage--list'>
            {cartListStore.map((product)=>{
                return <CartItem key={product.name} img={product.img} name={product.name} price={product.price}/>
            })}
        </div>
        
    )
}
function CartItem(props){
    
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();
    const handlePlus = ()=>{
        setNumber(number + 1);
        const totalMoney = number * props.price;
        dispatch(Cartmoneyslice.actions.addMoney(totalMoney));
    }
    const handleMinus = () => {
        if(number < 1){
            setNumber(number)
        } else 
        {
            setNumber(number - 1);
            const totalMoney = number * props.price;
            dispatch(Cartmoneyslice.actions.minusMoney(totalMoney));
        }
    }
    const handleClose = ()=>{
        dispatch(Cartslice.actions.removeItem({name:props.name}))
    }
    return(
        <div className='cart--item'>
            <div className='cart--item--pic'>
                <img src={props.img} alt="ảnh sản phẩm"/>
            </div>
            <div className='cart--item--name'>{props.name}</div>
            <div className='cart--item--price'>{props.price}$</div>
            <div className='cart--item--quantity'>
                <button onClick={handlePlus}>+</button><p>{number}</p><button onClick={handleMinus}>-</button>
            </div>
            <div className='cart--item--total'>Total: {number * props.price}$</div>
            <MdOutlineClose className='close' onClick={handleClose}/>
        </div>
    )
}