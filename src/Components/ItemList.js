import React from "react"
import Item from "./Item"


const ItemList = ({clickedItems, setClickedItems, showItems, updateItem, deleteItem}) =>{


    

return (
// Map the component Item here, and send the map Item to Item Edit



<div className={"designerItemsDisplay"} >


    {clickedItems?.map((item) => {
        
   return <Item key={item.id} item={item} stock={item.stock_quantity} clickedItems={clickedItems} showItems={showItems} deleteItem={deleteItem} setClickedItems={setClickedItems}/>
   

    })}


</div>


)

}

export default ItemList