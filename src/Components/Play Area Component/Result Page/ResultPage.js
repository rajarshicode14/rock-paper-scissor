import WaveAnim from "./Wave Animation/WaveAnim.js";

import "./ResultPage.css";

import rock from "../../../images/icon-rock.svg";
import paper from "../../../images/icon-paper.svg";
import scissor from "../../../images/icon-scissors.svg";

import {React, useEffect} from "react";
import { Link } from "react-router-dom";


function ResultPage({selected, score, setScore, userWin, setUserWin, compWin, setCompWin, message, setMessage}){

    function getOpponentImage(){
        if (selected[1] == "R") {
            return `url(${rock})`;
        }
        if (selected[1] == "P") {
            return `url(${paper})`;
        }
        if (selected[1] == "S") {
            return `url(${scissor})`;
        }
    }
    function getOpponentBorderColor(){
        if (selected[1] == "R") {
            return "hsl(349, 70%, 56%)";
        }
        if (selected[1] == "P") {
            return "hsl(230, 89%, 65%)";
        }
        if (selected[1] == "S") {
            return "hsl(40, 84%, 53%)";
        }
    }



    function getMyImage(){
        if (selected[0] == "R") {
            return `url(${rock})`;
        }
        if (selected[0] == "P") {
            return `url(${paper})`;
        }
        if (selected[0] == "S") {
            return `url(${scissor})`;
        }
    }
    function getMyBorderColor(){
        if (selected[0] == "R") {
            return "hsl(349, 70%, 56%)";
        }
        if (selected[0] == "P") {
            return "hsl(230, 89%, 65%)";
        }
        if (selected[0] == "S") {
            return "hsl(40, 84%, 53%)";
        }
    }


    useEffect(() => {

        // Draw Condition
        if (selected[1] == selected[0]) {
            setMessage("DRAW");
            setUserWin(false);
            setCompWin(false);
        }

        // User Win
        else if (selected[1] == 'R' && selected[0] == 'P') {
            setMessage("YOU WIN");
            setUserWin(true);
            setCompWin(false);
            setScore(score + 1);
        }
        else if (selected[1] == 'P' && selected[0] == 'S') {
            setMessage("YOU WIN");
            setUserWin(true);
            setCompWin(false);      
            setScore(score + 1);
        }
        else if (selected[1] == 'S' && selected[0] == 'R') {
            setMessage("YOU WIN");
            setUserWin(true);
            setCompWin(false);
            setScore(score + 1);
        }


        // Computer Win
        else if (selected[1] == 'P' && selected[0] == 'R') {
            setMessage("YOU LOSE");
            setUserWin(false);
            setCompWin(true);
        }
        else if (selected[1] == 'S' && selected[0] == 'P') {
            setMessage("YOU LOSE");
            setUserWin(false);
            setCompWin(true);
        }
        else if (selected[1] == 'R' && selected[0] == 'S') {
            setMessage("YOU LOSE");
            setUserWin(false);
            setCompWin(true);
        }

    }, []);

    (function componentDidUpdate() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener("popstate", function (event) {
        window.history.pushState(null, document.title, window.location.href);
        });
    })();

    return(
    <div className="result-area">
        <h2>YOU PICKED</h2>
        <h2>THE HOUSE PICKED</h2>
        <div className="display-result">
            <h1>{message}</h1>
            <Link to="/" > <input type="button" value="PLAY AGAIN" /> </Link>
        </div>
        <div className="my-pick" style={{backgroundImage : getMyImage(), borderColor : getMyBorderColor()}}>
            {userWin ? <WaveAnim /> : null}
        </div>
        <div className="house-pick anim" style={{backgroundImage : getOpponentImage(), borderColor : getOpponentBorderColor()}}>
            {compWin ? <WaveAnim /> : null}
        </div>
    </div>
    );
}

export default ResultPage;