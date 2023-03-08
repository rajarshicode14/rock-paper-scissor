import Header from "./Components/Header Component/Header.js";
import OpponentPickBefore from "./Components/Play Area Component/Opponent Pick Before/OpponentPickBefore.js";
import OpponentPickAfter from "./Components/Play Area Component/Opponent Pick After/OpponentPickAfter.js";
import PickArea from "./Components/Play Area Component/Pick Area/PickArea.js";
import Rules from "./Components/Rules Component/Rules.js";
import ResultPage from "./Components/Play Area Component/Result Page/ResultPage.js";
import Modal from "./Components/Modal Component/Modal.js";


import React,{ useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App(){

    let [selected, setSelected] = useState([]);
    let [score, setScore] = useState(0);
    let [openModal, setOpenModal] = useState(true);
    let [userWin, setUserWin] = useState(false);
    let [compWin, setCompWin] = useState(false);
    let [message, setMessage] = useState("");


    return (
        <div>
            {openModal ? <Modal setOpenModal = {setOpenModal}/> : null}
            <div className="main-content">
                <Header score = {score} setScore = {setScore}/>
                <Routes>
                    <Route exact path="/" element={<PickArea setSelected = {setSelected}/>} />
                    <Route path="opponetsPick" element={<OpponentPickBefore selected = {selected} />} />
                    <Route path="opponentsPickShow" element={<OpponentPickAfter selected = {selected} />}/>
                    <Route path="result" element={<ResultPage selected = {selected} score = {score} setScore = {setScore} userWin = {userWin} setUserWin = {setUserWin} compWin = {compWin} setCompWin = {setCompWin} message = {message} setMessage = {setMessage}/>}/>
                </Routes>
            </div>
            <Rules setOpenModal = {setOpenModal}/>
        </div>
    );
}

export default App;