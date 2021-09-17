import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";



import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(()=>{
    axiosWithAuth().get('/colors')
    .then(res =>{
        console.log("setting colors", res.data)
        setColors( res.data)
    })
    .catch(err=>{
        console.log(err)
    })
  }, [])

  const toggleEdit = (value) => {
    setEditing(value);
  };



  const saveEdit = (editColor) => {
    axiosWithAuth().put(`/colors/${editColor.id}`, editColor)
      .then(res => {
        console.log("response from edit API", res.data.id)
        // setColors([...colors,{}
        //   `${res.data.id}`:{
        //     color: res.data.color,
        //     code: {hex: res.data.code.hex}
        //   }
        // ])
      })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete(`/colors/${colorToDelete.id}`, colorToDelete)
      .then(res => {
        console.log("deleting color", res.data)
      })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
