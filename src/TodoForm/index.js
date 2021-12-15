import React from "react";
import { TodoContext } from "../TodoContex";
import './todoForm.css';

function TodoForm (){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = event => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = ()=> {
        setOpenModal(false);
    }

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form
            className = 'form__container' 
            onSubmit = {onAdd}>

                <label className = 'form__title'>Nueva Tarea</label>
                <textarea 
                    className = 'form__textArea'
                    value = {newTodoValue}
                    onChange = {onChange}
                    placeholder='Escribe la tarea que deseas agregar'/>
                <div className = 'form__buttons'>
                    <button 
                        type = 'button'
                        onClick = {onCancel} >Cancel</button>
                    <button 
                        className = 'button__add'
                        type = 'submit'>Añadir</button>
                </div>
        </form>
    );
}


export {TodoForm};