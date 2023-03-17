import "./OpponentPickAfter.css";

import rock from "../../../images/icon-rock.svg";
import paper from "../../../images/icon-paper.svg";
import scissor from "../../../images/icon-scissors.svg";

import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";


function MatchAreaAfter({selected}){

    let navigate = useNavigate();

    function getOpponentImage(){
        if (selected[1] === "R") {
            return `url(${rock})`;
        }
        if (selected[1] === "P") {
            return `url(${paper})`;
        }
        if (selected[1] === "S") {
            return `url(${scissor})`;
        }
    }
    function getOpponentBorderColor(){
        if (selected[1] === "R") {
            return "hsl(349, 70%, 56%)";
        }
        if (selected[1] === "P") {
            return "hsl(230, 89%, 65%)";
        }
        if (selected[1] === "S") {
            return "hsl(40, 84%, 53%)";
        }
    }



    function getMyImage(){
        if (selected[0] === "R") {
            return `url(${rock})`;
        }
        if (selected[0] === "P") {
            return `url(${paper})`;
        }
        if (selected[0] === "S") {
            return `url(${scissor})`;
        }
    }
    function getMyBorderColor(){
        if (selected[0] === "R") {
            return "hsl(349, 70%, 56%)";
        }
        if (selected[0] === "P") {
            return "hsl(230, 89%, 65%)";
        }
        if (selected[0] === "S") {
            return "hsl(40, 84%, 53%)";
        }
    }

    useEffect(() => {
        setTimeout(() => {
            navigate("/result");
        }, 1000);
    },[]);


    (function componentDidUpdate() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener("popstate", function (event) {
        window.history.pushState(null, document.title, window.location.href);
        });
    })();


    return(
    <div className="match-area-after">
        <h2>YOU PICKED</h2>
        <h2>THE HOUSE PICKED</h2>
        <div className="my-pick" style={{backgroundImage : getMyImage(), borderColor : getMyBorderColor()}}></div>
        <div className="house-pick" style={{backgroundImage : getOpponentImage(), borderColor : getOpponentBorderColor()}}></div>
    </div>);
}

export default MatchAreaAfter;