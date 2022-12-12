import React, {useState, useEffect} from "react"
import Designer from "../Components/Designer"
import DesignerItem from "../Components/DesignerItem"
import AddItem from "../Components/AddItem"

const Designers = ({designers}) => {
     const [editClick, setEditClick] = useState(false)
    const [items, setItems] = useState()
    const [clickedItems, setClickedItems] = useState(undefined)

    useEffect(()=>{

        fetch("http://localhost:3000/items")
        .then((r)=> r.json())
        .then((res)=> setItems(res))
    }, [])

    

function showItems(e) {

    console.log("hey", e.target.id)
  
   

   const selectedDesignerItems = items.filter((x) => x.designer_id == e.target.id)
    console.log("selectedDesigner:", selectedDesignerItems)
    
    setClickedItems(selectedDesignerItems)
    setEditClick(false)

  

}

console.log("items", items)


console.log("clicked items", clickedItems)

    let designerNames = designers?.map((designer) =>
    { return  (<Designer id={designer.id} name={designer.name} onClick={showItems} key={designer.id} />)
    }
    )

    return(

        <div>
        <div className={'designerColumn'}>
            <h3 >DESIGNERS</h3>
        {designerNames}
        </div>
      
          <div> 
        
  
       <DesignerItem clickedItems={clickedItems} setEditClick={setEditClick} editClick={editClick} />

        </div>


      <div>

      <AddItem />
      </div>
  
        

       

        </div>
    )





}

export default Designers