import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import React, {useState} from "react";


const Todo: React.FC = (): JSX.Element => {
    const [todos,setTodos] = useState<Array<string>>([])

    const addTodo = (todo:string) => {
        setTodos([...todos, todo])
    }

    return(
        <>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </>
    )
}


export default Todo