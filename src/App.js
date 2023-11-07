import React, { useEffect, useState } from "react";
import './App.css'
function App(){

  const [title, setTitle] = useState("")
  const [description, setDespription] = useState("")
  const [allData, setAllData] = useState([]);

  const onChangeTitle = (e)=>{
    setTitle(e.target.value)
  }
  const onChangeDescription = (e)=>{
    setDespription(e.target.value)
  }
  const onSubmitForm = (e)=>{
    e.preventDefault();
    if(title==="" && description===""){
      return
    }
    let tempData = {
      tempTitle: title,
      tempDescription: description
    }
    setAllData([
      ...allData,
      tempData
    ])
    setTitle("")
    setDespription("")
  }
  const handleDelete = (index)=>{
      console.log("Remove clicked", index)
      const tempArr = [...allData];
      tempArr.splice(index, 1)
      setAllData(tempArr)
  }
  
  return(
    <>
      <h1>Nishit's to do list</h1>
       
      <form id="InputForm" onSubmit={onSubmitForm}>
        <input
          placeholder="Enter title"
          type="text"
          value={title}
          onChange={onChangeTitle}
          className="Box"
        /> 
        <input id="Description"
          placeholder="Enter description"
          type="text"
          value={description}
          onChange={onChangeDescription}
          className="Box"
        />
        <button className="Addbutton">
          Add
        </button>
      </form>
      {
        allData.map((item, index)=>{
          return(
            <div key={index} className="ExistingContainer">
              <div className="Box DoneBackgroundColor">{item?.tempTitle}</div>
              <div className="Box DoneBackgroundColor">{item?.tempDescription}</div>
              <button 
                className="RemoveButton"
                onClick={()=>handleDelete(index)}
              >Remove</button>
            </div>
          )
        })
      }
    </>
  )
}

export default App