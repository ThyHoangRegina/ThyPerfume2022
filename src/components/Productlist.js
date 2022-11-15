import React from 'react';
import './Productlist.css';
import { useDispatch } from 'react-redux';
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
import { useSelector } from 'react-redux';
import { Cartslice } from './Redux/Reducer';


export const perfumeList = [
    {img: nestindigo, name:'Nest Indigo', price: 82, season: 'Winter'},
    {img: tamdao, name:'Diptyque Tamdao', price: 380, season: 'Winter'},
    {img: thenoir, name:'Lelabo Thenoir', price: 300, season: 'Winter'},
    {img: ysllibre, name:'YSL Libre', price: 150, season: 'Summer'},
    {img: vilbasil, name:'Vilhelm Basil', price: 150, season: 'Summer'},
    {img: sundazed, name:'Byredo Sundazed', price: 260, season: 'Summer'},
    {img: rose, name:'Killian roses', price: 400, season: 'Summer'},
    {img: flowerhead, name:'Byredo Flowerhead', price: 260, season: 'Spring'},
    {img: youngrose, name:'Byredo Youngrose', price: 260, season: 'Spring'},
    {img: nestpoppy, name:'Nest Poppy', price: 82, season: 'Spring'},
    {img: memoire, name:'Gucci Memoire', price: 400, season: 'Autumn'},
    {img: mixed, name:'Byredo M.Emotions', price: 260, season: 'Autumn'},
    {img: autumnvibe, name:'RM Autumnvibes', price: 200, season: 'Autumn'}
]

const seasonSelector = (state)=> {return state.filter.season};
const searchSelector = (state) => {return state.filter.searchText}

export default function Productlist(){
    const season = useSelector(seasonSelector);
    const searchText = useSelector(searchSelector);

    if (searchText === '') {
        if(season === 'All') {
            return(
                <div className='productlist' id='productlist'>
                    {perfumeList.map((perfume) => {
                            return <Productitem key={perfume.name} img={perfume.img} name={perfume.name} price={perfume.price}/>
                        })}
                </div>
            )
        } else {
            const filteredList = perfumeList.filter((perfume)=>{
                return perfume.season === season;
            })
            return(
                <div className='productlist'>
                    {filteredList.map((perfume)=>{
                        return <Productitem key={perfume.name} img={perfume.img} name={perfume.name} price={perfume.price}/>
                    })}
                </div>
            )
        }
    }
    else {
        const searchedList = perfumeList.filter((perfume)=>{
            return perfume.name.toLowerCase().includes(searchText.toLowerCase());
        })
        return(
            <div className='productlist' id='productlist'>
                    {searchedList.map((perfume)=>{
                        return <Productitem key={perfume.name} img={perfume.img} name={perfume.name} price={perfume.price}/>
                    })}
                </div>
        )
    }
    
}

export function Productitem(props){
    const dispatch = useDispatch()
    const handleAddToCart = ()=>{
        dispatch(Cartslice.actions.addItem({img: props.img, name: props.name, price: props.price}))
    }
    return(
        <div className='productitem'>
            <div className='productitem--pic'>
                <img src={props.img} alt="Anh san pham"></img>
            </div>
            <div className='productitem--des'>
                <div className='product--name'>{props.name}</div>
                <div className='product--price'>{props.price}$</div>
                <button className='product--btn' onClick={handleAddToCart}>add to cart</button>
            </div>
        </div>
    )
}