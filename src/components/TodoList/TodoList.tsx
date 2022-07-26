import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import './todo-list.styles.scss'
import {TodoType} from "../../types/todo";

interface TodoListProps {
    todos: Array<TodoType>,
    removeTodo: (arg: number) => void
}

const TodoList: React.FC<TodoListProps> = ({todos,removeTodo}: TodoListProps): JSX.Element => {

    return (
        <ul className='todo-list'>
            {
                todos.map((todo) => <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} />)
            }
        </ul>
    )
}

export default TodoList