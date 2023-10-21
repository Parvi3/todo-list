import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        if (value.length > 0) {
            e.preventDefault();
            addTodo(value);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input">
                <input
                    placeholder="Что нужно сделать?"
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                {value.length > 0 ? <button className="btnToDo" type='submit'>Добавить</button> : null}
            </div>
        </form>

    );
};

export default TodoForm;