import React,{useEffect, useState} from "react";


const Designer = ({id, name, designers, showItems}) => {


  


    return (

    <div className={"designerName"} >

    
            <h3 id={id} name={name} onClick={showItems}  className={"designer"}>{name}</h3>
            {/* <button className={"designerDelete"}>x</button> */}

    

            </div>



    )
}

export default Designer