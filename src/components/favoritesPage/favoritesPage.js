import  FavoritesCard from "./favoritesCard";
import React, { useState,useEffect,useContext } from 'react';
import Navbarsec from "../navBar/navBar";
import "./favoritesCard.css";
import Context from "../../context/Context";


const FavoritesPage =()=> {
    let data = useContext(Context);
    const [favs,setFavs] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3100/favorites/view/${data.id}`)
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