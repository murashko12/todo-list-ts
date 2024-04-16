import React from 'react'
import {ITodo} from '../types/data' 
import '../App.css'
interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props;
    return (
        <div className="todoItem">
            <input  type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
            {title}
            <button onClick={() => removeTodo(id)}>x</button>
        </div>
    )
}

export default TodoItem
