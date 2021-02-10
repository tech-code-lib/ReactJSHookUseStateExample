import React, { useState } from 'react';

const AddToDo = ({todoAdded}) => {
    const [todo, setTodo] = useState('aa');

    let submitHandler = (event) => {
        event.preventDefault();        
        todoAdded(todo);
        setTodo('');
    }

    let onChangeHandler = (event) => {
        let todoItem = event.target.value;
        setTodo(todoItem);
        
    }

    return ( <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="txtToDo">Title</label>&nbsp;
            <input type="text" value={todo} onChange={onChangeHandler} id="txtToDo" />
            <input type="submit" value="Save" />
        </form>
    </div> );
}
 
export default AddToDo;