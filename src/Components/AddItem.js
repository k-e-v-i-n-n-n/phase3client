import React from "react";

const AddItem = () => {



    return(
        <div className={"formDiv"}>
            <h3>ADD ITEM</h3>
       <form className={"form"}>
       
        <label>Designer</label>
        <input></input>
       
        
        <label>Item</label>
        <input></input>
      
    
        <label>Size</label>
        <input></input>

        <label>Price</label>
        <input></input>

        <label>Stock</label>
        <input></input>
      
       </form>
       <button>SUBMIT</button>
       </div>

    )
}


export default AddItem