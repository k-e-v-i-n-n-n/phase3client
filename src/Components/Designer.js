import React,{useEffect, useState} from "react";


const Designer = ({id, name, designers, onClick}) => {


  


    return (

    <div className={"designer"}>

    
            <h3 id={id} onClick={onClick} >{name}</h3>

    

            </div>



    )
}

export default Designer