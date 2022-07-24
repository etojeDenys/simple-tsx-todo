import React from "react";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
    todos: Array<string>
}

const TodoList: React.FC<TodoListProps> = ({todos}: TodoListProps): JSX.Element => {


    return (
        <ul>
            {
                todos.map((todo,index) => <TodoItem key={index} title={todo}/>)
            }
        </ul>
    )
}

export default TodoList