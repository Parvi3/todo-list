import React from 'react';

const ListTodo = ({ todo, delTodo, id }) => {

    const len = id + 1;

    return (
        <div className="inputTodo" >
            <p className=''>{len}. {todo}</p>
            <button onClick={() => delTodo(todo)} className="btnToDo">X</button>
        </div>
    );
};

export default ListTodo;