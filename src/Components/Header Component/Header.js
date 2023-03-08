import Score from "./Header Score/Score.js";

import "./Header.css";

import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";


function Header({score, setScore}){

    return( 
            <div className="header-container">
                <Link to="/" onClick={() => {setScore(0)}}><img  src= {logo} alt= "logo" /></Link>
                <Score score = {score}/>
            </div>
    );
}

export default Header;