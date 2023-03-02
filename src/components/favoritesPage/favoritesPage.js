import  FavoritesCard from "./favoritesCard";
import React, { useState,useEffect } from 'react';
import Navbarsec from "../navBar/navBar";
import "./favoritesCard.css";

const FavoritesPage =()=> {
    const [favs,setFavs] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3100/favorites/view/1`)
        .then(data => data.json())
        .then((favs) => {
            console.log(favs);
            setFavs(favs);
        })
    },[])
    return (
        <div>
            <Navbarsec />
            <div className="card-container">
                {favs && favs.map((fav)=> <FavoritesCard obj={fav} key={fav.id} setFavs={setFavs}/>)}
            </div>
        </div>
    )
}


export default FavoritesPage;