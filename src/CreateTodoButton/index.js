import React from "react";
import { TodoContext } from "../TodoContex";
import './CreateTodoButton.css';


function CreateTodoButton () {
    
    const {setOpenModal} = React.useContext(TodoContext);
    const toggleModal = () => {
       /*  !openModal? 
            setOpenModal(true) 
            :setOpenModal(false) ; */

        setOpenModal(mode => !mode);
    }

    return(
        <button 
            className='agregar'
            onClick={toggleModal}>
                +
        </button>
    );
}

export {CreateTodoButton};