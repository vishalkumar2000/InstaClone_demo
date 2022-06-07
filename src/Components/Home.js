import React from "react";
import { Link } from "react-router-dom";
import '../Components/Home.css';
import image from "../Components/homeimg.jpg";


// import Postview from "../Postview";


const Home =()=>
{
    return(
     <div className="Home">
        <div className="left-side">
            <img className="homeimg" src={image} alt="cover"></img>
        </div>
        <div className="right-side">
            <h1>Welcome To Instaclone</h1>
            <Link to="/Postview">
                <button className="btn">Enter</button>
            </Link>
        </div>
    </div>
    )
}

export default Home;