import React, {useState} from "react";

const ItemEdit = ({clickedItems, setClickedItems, item, setEditMode, deleteItem}) => {
    const [editItem, setEditItem] = useState(item)

    const {name, color, size, price, stock_quantity} = item

    // function updateItem(id){

    //   let updated = clickedItems.filter((item) => item.id !== id)
    
    
    // setClickedItems(editItem)
    
    // }


    function saveEdit(){

        fetch(`http://localhost:3000/items/${editItem.id}`, {

        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: editItem.name,
            color: editItem.color,
            size: editItem.size,
            price: editItem.price,
            stock_quantity: editItem.stock_quantity,
            designer_id: editItem.designer_id
        
          }),

        })
        .then((r) => r.json())
        .then((update) => setEditItem(update))

        console.log("saveEdit Call")

    }

    function updateInput(e){ 
        
        setEditItem({...editItem, [e.target.name]: e.target.value})
        // showItems(editItem.designer_id)
    }

    function updatePatch(){

   let itemFilter = clickedItems.filter((item) => item.id !== editItem.id)
   setClickedItems({...itemFilter, ...editItem})

   console.log("itemFilter", itemFilter)
    }

 


    function fetchDelete(){
      fetch(`http://localhost:3000/items/${editItem.id}`,{
      method: "DELETE",})

   
    }
console.log("set edit item", editItem)


    return(

<div className="item">
        
            <form className="item">
            <input name={"name"} value={editItem.name} onChange={updateInput}></input>  
            <input name={"color"} value={editItem.color} onChange={updateInput}></input>
            <input name={"size"} value={editItem.size} onChange={updateInput}></input>
            <input name={"price"} value={editItem.price} onChange={updateInput}></input>
            <input name={"stock_quantity"} value={editItem.stock_quantity} onChange={updateInput}></input>
            </form>
       

            <div className={"editButtons"} >
            <button onClick={() => {saveEdit(); setEditMode(false); updatePatch()}}>SAVE</button>
            <button onClick={() => setEditMode(false)}>CANCEL</button>
            <button onClick={() => {setEditMode(false); fetchDelete(); deleteItem(editItem.id)}}>DELETE</button>
            </div>
    </div>
    )



}

export default ItemEdit