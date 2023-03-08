import "./PickArea.css";

import { Link } from "react-router-dom";


function PlayArea(props){
    
    let getUserSelection;
    let x, char;
    let str = "RPS";

    function rock(){
        getUserSelection = "R";
        props.setSelected([getUserSelection]);

        x = Math.floor(Math.random() * 3);
        char = str.charAt(x);
        props.setSelected(oldArray => [...oldArray, char]);       
    }
    function paper(){
        getUserSelection = "P";
        props.setSelected( [getUserSelection]);

        x = Math.floor(Math.random() * 3);
        char = str.charAt(x);
        props.setSelected(oldArray => [...oldArray, char]);
    }
    function scissor(){
        getUserSelection = "S";
        props.setSelected( [getUserSelection]);

        x = Math.floor(Math.random() * 3);
        char = str.charAt(x);
        props.setSelected(oldArray => [...oldArray, char]);
    }


    (function componentDidUpdate() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener("popstate", function (event) {
        window.history.pushState(null, document.title, window.location.href);
        });
    })();

    
    return (
        <div className="play-area">
            <Link className="rock" onClick={rock} to="/opponetsPick"></Link>
            <Link className="paper" onClick={paper} to="/opponetsPick"></Link>
            <Link className="scissor" onClick={scissor} to="/opponetsPick"></Link>     
        </div>
    );
}

export default PlayArea;