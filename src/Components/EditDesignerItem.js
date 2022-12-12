import React, {useState} from "react";

const EditDesignerItem = ({clickedItems, items, setItems, designerName, setEditClick}) => {
    const [editItem, setEditItem] = useState(clickedItems)

    function saveEdit(){


    }

    function updateInput(e){ setEditItem(...editItem, e.target.value)}


    return(
<div>
       { editItem.map((x) =>{

            return (     
                <div className="item">
            <input value={x.name} onChange={updateInput}></input>       
            {/* <form className="item" >

  
            <input value={x.color} onChange={updateInput}></input>
            <input value={x.size} onChange={updateInput}></input>
            <input value={x.price} onChange={updateInput}></input>
            <input value={x.stock} onChange={updateInput}> </input>
            </form>
            <div>
            <button onClick={saveEdit}>SAVE</button>
            <button onClick={() => setEditClick(false)}>CANCEL</button>
            </div> */}
            </div>
            )})}

    </div>
    )



}

export default EditDesignerItem