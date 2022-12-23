import React, {useState} from "react";

const ItemAdd = () => {

    const [designerResponse, setDesignerResponse] = useState({})
    const [itemForm, setItemForm] = useState({
        name: "", color: "", size: "", price: "",stock_quantity: "", designer_id: "" })
    const [designerForm, setDesignerForm] = useState("")


    // ADD ITEM Pseudo Code
    // Designer form checks if it exists already in the designer database
    // If it does, grab the ID
    // If it does not, create it, and then grab the ID
    // 
    // Next, add the item to the database
    // Pull in the designer ID and assign it to the foreign Key on the Item
    // Send post request

// function addItem(e){

//     e.preventDefault();

// fetch(`http://localhost:3000/designers/${designerForm}`, {

// method: "POST",
// headers: {
//     "Content-Type": "application/json"
// },
// body: JSON.stringify({
//     name: designerForm

// }),
// })
// .then((res) => res.json())
// .then(data => setItemForm({...itemForm, designer_id: data.id}))

// console.log("itemForm", itemForm)
// itemPost()

// // .then(console.log("itemForm", itemForm))
// // .then(itemPost())
// // .then(() => {


// //     fetch(`http://localhost:3000/items`,{

// //     method: "POST",
// //     headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         name: itemForm.name,
// //         color: itemForm.color,
// //         size: itemForm.size,
// //         price: itemForm.price,
// //         stock_quantity: itemForm.stock_quantity,
// //         designer_id: designerResponse.id
    
// //       }),
// //     })
// // })
// // .then(() => {setDesignerForm("");
// // setItemForm("")})



// }

async function addItem(){

    fetch(`http://localhost:3000/designers/${designerForm}`, {
    
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: designerForm
    
    }),
    })
    .then((res) => res.json())
    .then(data => setDesignerResponse(data))
    .then(console.log("designer response in Fetch", designerResponse))
    
    
    
    await fetch(`http://localhost:3000/items`,{
    
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: itemForm.name,
            color: itemForm.color,
            size: itemForm.size,
            price: itemForm.price,
            stock_quantity: itemForm.stock_quantity,
            designer_id: designerResponse.id
        
          }),
        })
    }

    console.log("designer response", designerResponse)

// function designerPost(){

//     fetch(`http://localhost:3000/designers/${designerForm}`, {

//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: designerForm
    
//     }),
//     })
//     .then((res) => res.json())
//     .then((data) => {setDesignerResponse(data)})
// }

// function itemPost (){
    
//     fetch(`http://localhost:3000/items`,{
    
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: itemForm.name,
//             color: itemForm.color,
//             size: itemForm.size,
//             price: itemForm.price,
//             stock_quantity: itemForm.stock_quantity,
//             designer_id: itemForm.id
        
//           }),
//         })

// }


function popForm(e){

    setItemForm({...itemForm, [e.target.name]: e.target.value

    })
}



function clearForm() {


setDesignerForm("")
setItemForm({
    name: "", color: "", size: "", price: "",stock_quantity: "", designer_id: "" })
}

// console.log("item form", itemForm, designerForm)

    return(
        <div className={"formDiv"}>
            <h3>ADD ITEM</h3>
       <form className={"form"}>
       
        <label>Designer</label>
        <input value={designerForm} onChange={(e) => setDesignerForm(e.target.value)}></input>
       
        
        <label>Item Name</label>
        <input name={"name"} value={itemForm.name} onChange={popForm}></input>

        <label>Color</label>
        <input name={"color"} value={itemForm.color} onChange={popForm} ></input>
    
        <label>Size</label>
        <input name={"size"} value={itemForm.size} onChange={popForm}></input>

        <label>Price</label>
        <input name={"price"} value={itemForm.price} onChange={popForm}></input>

        <label>Stock</label>
        <input name={"stock_quantity"} value={itemForm.stock_quantity} onChange={popForm}></input>
        
       </form>

       <button onClick={addItem}>SUBMIT</button>
       <button onClick={clearForm} >CANCEL</button>
      
       </div>

    )
}


export default ItemAdd