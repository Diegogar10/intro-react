import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoContext } from "../TodoContex";
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal' 
import { TodoForm } from "../TodoForm";

function AppUI(){

    const {
        error,
        loading, 
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch />
        <TodoList>
            { error && <p>Error de carga, presiona F5!</p>}
            { loading && <p>cargando inoformación, estaremos contigo pronto!</p>}
            { (!loading && !searchedTodos.lenght) && <p>Crea tu primer TODO!</p>}

            {searchedTodos.map(todo =>(
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete = {()=>completeTodo(todo.text)}
                onDelete = {()=>deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
        
        {openModal && (
            <Modal>
                <TodoForm></TodoForm>
            </Modal>
        )}
        <CreateTodoButton/>
    </React.Fragment>
    );
}

export {AppUI};