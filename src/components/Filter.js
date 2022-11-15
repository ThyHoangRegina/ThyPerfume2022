import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {Filterslice} from './Redux/Reducer.js';
import './Filter.css';
import { HiSearch } from "react-icons/hi";

export default function Filter(){
    return(
        <div className='filter'>
            <Searchbar/>
            <Filterbar/>
        </div>
    )
}


function Searchbar(){
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch()
    const handleInput = (e)=>{
        setSearchText(e.target.value);
        console.log(searchText)
    }
    const handleSearchBtn = ()=>{
        dispatch(Filterslice.actions.bySearch(searchText));
        setSearchText('');
    }
    return(
        <div className='searchbar'>
            <input value={searchText} onChange={handleInput} type='text' placeholder='Search...' name='Search bar'/>
            <button className='searchbar--btn' onClick={handleSearchBtn}><HiSearch/></button>
        </div>
    )
}

function Filterbar(){

    const [season, setSeason] = useState("All");
    const dispatch = useDispatch();
    const handleSpring = () => {
        setSeason("Spring");
        dispatch(Filterslice.actions.bySeason(season));
    }
    const handleSummer = () => {
        setSeason("Summer");
        dispatch(Filterslice.actions.bySeason(season));
    }
    const handleFall = () => {
        setSeason("Autumn");
        dispatch(Filterslice.actions.bySeason(season));
    }
    const handleWinter = () => {
        setSeason("Winter");
        dispatch(Filterslice.actions.bySeason(season));
    }
    const handleAll= () => {
        setSeason("All");
        dispatch(Filterslice.actions.bySeason(season));
        dispatch(Filterslice.actions.bySearch(''));
    }

    return(
        <div className='filterbar'>
            <div className='filterbar--title'>Filter by season:</div>
            <div className='filterbar--content'>
                <button className={season === "Spring" ? 'btn-primary active' : 'btn-primary'} onClick={handleSpring}>Spring</button>
                <button className={season === "Summer" ? 'btn-primary active' : 'btn-primary'}onClick={handleSummer}>Summer</button>
                <button className={season === "Autumn" ? 'btn-primary active' : 'btn-primary'}onClick={handleFall}>Fall</button>
                <button className={season === "Winter" ? 'btn-primary active' : 'btn-primary'}onClick={handleWinter}>Winter</button>
                <button className={season === "All" ? 'btn-primary active' : 'btn-primary'}onClick={handleAll}>All</button>
            </div>
        </div>
    )
}