import React from "react";
import { TodoContext } from "../TodoContex";
import './TodoSearch.css';

function TodoSearch () {

    const { searchValue, setSearch } = React.useContext(TodoContext);

    const cambioTexto = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    
    return(
        <input 
            className ='search' 
            placeholder ='Cebolla'
            value = {searchValue} 
            onChange ={cambioTexto}></input>
    );
}

export {TodoSearch};