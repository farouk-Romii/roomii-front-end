import ListingCard from '../listing_card/listingCard';
import React, { useState,useEffect } from 'react';
import "./listingPage.css";
import Navbarsec from '../navBar/navBar';


const ListingPage = () => {
    const [data,setData] = useState(null);

    useEffect(()=> {
        fetch("http://localhost:3100/room/view")
        .then(list=> list.json())
        .then(data=> {
            console.log(data)
            setData(data)})
    },[])

    return (
        <div>
            <Navbarsec/>
            
            <div className='list-container'>
            
                {data &&  data.map(list=> <ListingCard obj={list} key={list.id} className= "card-item"/>)}
            </div>
        </div>
    );
}



export default ListingPage

