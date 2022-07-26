import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import React, {useEffect, useState} from "react";
import './todo.styles.scss'
import {TodoType} from "../../types/todo";



const Todo: React.FC = (): JSX.Element => {
    const [todos, setTodos] = useState<Array<TodoType>>(()=>{
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    })

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])


    const removeTodo = (id: number) => {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }

    const addTodo = (todo: string) => {
        setTodos([...todos, {title: todo, id: Date.now()}])
    }

    return (
        <div className='todo-app'>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo}/>
        </div>
    )
}


export default Todo