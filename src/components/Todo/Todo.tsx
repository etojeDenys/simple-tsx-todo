import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import React, {useEffect, useState} from "react";


const Todo: React.FC = (): JSX.Element => {
    const [todos, setTodos] = useState<Array<string>>([])

    useEffect(() => {
        const todosFromLocalStorage = localStorage.getItem('todos')
        !!todosFromLocalStorage && setTodos([...JSON.parse(todosFromLocalStorage)])
    }, [])

    const addTodo = (todo: string) => {
        setTodos([...todos, todo])
        localStorage.setItem('todos', JSON.stringify([...todos, todo]))
    }

    return (
        <>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </>
    )
}


export default Todo