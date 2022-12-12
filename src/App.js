import React, { useEffect, useState} from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";

import Designers from './Sections/Designers';
import Nav from './Components/Nav';
import AddItem from './Components/AddItem';

function App() {

  const [designers, setDesigners] = useState([])

  useEffect (() => {fetch("http://localhost:3000/designers")
    .then((res) => res.json())
    .then((des) => setDesigners(des))}, []
  )

  
  return (

    <HashRouter>
    <Nav/>
    <Routes>
    <Route exact path="/" element={<Designers designers={designers}/>} />
  
    </Routes>
    
    </HashRouter>
    

  );
}

export default App;
