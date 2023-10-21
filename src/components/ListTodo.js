import React from 'react';

const ListTodo = ({ todo, delTodo, id }) => {

    const len = id + 1;

    return (
        <div className="inputToDo" >
            <p >{len}. {todo}</p>
            <button onClick={() => delTodo(todo)} className="btnToDo">X</button>
        </div>
    );
};

export default ListTodo;