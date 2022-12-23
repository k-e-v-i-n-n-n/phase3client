import React, { useEffect, useState} from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";

import Designers from './Sections/Designers';
import Nav from './Components/Nav';
import ItemList from './Components/ItemList';


function App() {

  const [designers, setDesigners] = useState([])
  const [currentDesigner, setCurrentDesigner] = useState("")
  const [clickedItems, setClickedItems] = useState([])    

  useEffect (() => {fetch("http://localhost:3000/designers")
    .then((res) => res.json())
    .then((des) => setDesigners(des))}, []
  )

  function showItems(e) {
    fetch(`http://localhost:3000/items/${e.target.id}`)
        .then((r)=> r.json())
        .then((res)=> setClickedItems(res))
   
        setCurrentDesigner(e.target.innerHTML)
}



function deleteItem(id){
console.log("delete id", id)

  let updated = clickedItems.filter((item) => item.id !== id) 
  setClickedItems(updated)

}





  
  
  return (

    <HashRouter>
    <Nav currentDesigner={currentDesigner} />
    <Routes>
    <Route exact path="/" element={
    <>
    <ItemList  clickedItems={clickedItems} setClickedItems={setClickedItems} showItems={showItems} currentDesigner={currentDesigner} deleteItem={deleteItem} /> 
      <Designers designers={designers} showItems={showItems} clickedItems={clickedItems}/> 
      
    </>} />
  
    </Routes>
    
    </HashRouter>
    

  );
}

export default App;
