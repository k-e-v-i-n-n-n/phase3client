import React, {useState, useEffect} from "react"
import Designer from "../Components/Designer"
import Item from "../Components/Item"
import ItemAdd from "../Components/ItemAdd"

const Designers = ({designers, showItems}) => {


    let designerNames = designers?.map((designer) =>
    { return  (<Designer id={designer.id} name={designer.name} showItems={showItems} key={designer.id} />)
    }
    )

    return(

        <div>
        <div className={'designerColumn'}>
            <h3 >DESIGNERS</h3>
        {designerNames}
        </div>
 


      <div>

      <ItemAdd />
      </div>
  
        

       

        </div>
    )





}

export default Designers