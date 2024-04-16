import { useState, useRef, useEffect } from "react"
import './App.css'

import {ITodo} from './types/data' 
import TodoList from "./components/TodoList"

const App: React.FC = () => {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') addTodo()
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map((todo) => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    

    return <div className="conatiner">
        <div className="wrapper">
            <div className="wrapperInput">
                <input value={value} onChange={handleChange} onKeyDown={handleKeydown} ref={inputRef}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    </div>
}

export default App