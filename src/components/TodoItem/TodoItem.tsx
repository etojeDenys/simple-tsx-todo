import React from "react";

interface TodoItemProps {
    title: string
}

const TodoItem: React.FC<TodoItemProps> = ({title}: TodoItemProps): JSX.Element => {


    return (
        <li>
            {title}
        </li>
    )
}

export default TodoItem