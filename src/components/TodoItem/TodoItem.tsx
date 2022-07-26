import React from "react";
import './todo-item.styles.scss'

interface TodoItemProps {
    title: string,
    id: number
    removeTodo: (arg: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({title, id, removeTodo}: TodoItemProps): JSX.Element => {


    return (
        <li className='todo-item' onClick={() => removeTodo(id)}>
            {title}
        </li>
    )
}

export default TodoItem