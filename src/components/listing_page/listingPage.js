import ListingCard from '../listing_card/listingCard';
import React, { useState,useEffect } from 'react';
import "./ListingPage.css";


const ListingPage = () => {
    const [data,setData] = useState(null);

    useEffect(()=> {
        fetch("http://localhost:3100/room/view")
        .then(list=> {list.json()})
        .then(data=> {setData(data)})
    },[])

    return (
        <div className='list-container'>
            {data &&  data.map(list=> <ListingCard obj={list} key={list.id}/>)}
        </div>
    );
}



export default ListingPage

