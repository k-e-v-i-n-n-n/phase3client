import React, {useState} from "react";
import EditDesignerItem from "./EditDesignerItem";


const DesignerItems = ({
   
    designer_id, 
    designers, 
    editClick, 
    setEditClick, items, setItems,
    clickedItems}) => {


        const [editMode, setEditMode] = useState(false)

const designerName = designers?.find((x) => x.id == designer_id).name
    
    return (
        <div className={"designerItemsDisplay"}>
            

{(clickedItems != undefined) ? editClick ?  
   
    

   (<EditDesignerItem clickedItems={clickedItems} key={clickedItems.id} /> )
    
    
    :(clickedItems.map((x) =>{

            return (     
            
            <div className="item">
            <button onClick={() => setEditMode(!editMode)} >Test EDIT</button>

            {editMode ? <input placeholder={x.name}></input> : <h4>{x.name}</h4>}
            
            <h6>{x.color}</h6>
            <h6>{x.size}</h6>
            <h6>{x.price}</h6>
            <h6> Stock {x.stock}</h6>
            <div>
            <button onClick={() => setEditClick(true)}>EDIT</button>
            </div>
     
            </div>)
             }))  : ( <div></div>)
            }

      
      </div>
    
)
    
}


export default DesignerItems