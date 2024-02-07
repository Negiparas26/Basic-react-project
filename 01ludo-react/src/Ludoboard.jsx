import { useState } from "react";
export default function Ludoboard(){
    // eslint-disable-next-line no-unused-vars
    let [moves, setMoves]=useState({blue:0 ,yellow:0 ,red:0,green:0});


    let updateblue =()=>{
        //console.log(`moves.blue= ${moves.blue}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, blue:prevMoves.blue +1}
        });
    };

    
    let updatered =()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, red:prevMoves.red +1}
        });
    };
    
    let updategreen =()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, green:prevMoves.green +1}
        });
    };

    
    let updateyellow =()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow:prevMoves.yellow +1}
        });
    };




    return(
        <div>
            <p>game begins</p> 
            <div className="board">
                <p>blue moves={ moves.blue}</p>
                <button style={{ backgroundColor:"blue"}}  onClick={updateblue}>+1</button>
                <p>yellow moves={ moves.yellow}</p>
                <button style={{ backgroundColor:"yellow" ,color:"black"}  }onClick={updateyellow}>+1</button>
                <p>red moves={ moves.red}</p>
                <button style={{ backgroundColor:"red"}}  onClick={updatered}>+1</button>
                <p>green moves={ moves.green}</p>
                <button style={{ backgroundColor:"green"}}  onClick={updategreen}>+1</button>
                 
            </div>
        </div>
    );


}