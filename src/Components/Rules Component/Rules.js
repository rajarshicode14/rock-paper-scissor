import "./Rules.css";


function Rules({setOpenModal}){

    return(
        <div onClick={() => {setOpenModal(true)}} className="rules"><h3>RULES</h3></div> 
    );
}

export default Rules;