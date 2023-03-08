import "./Score.css";


function Score({score}) {

    return(
        <div className="score">
            <h4>SCORE</h4>
            <h2>{score}</h2>
        </div>
    );
}

export default Score;