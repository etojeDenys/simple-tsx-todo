import React, {useRef} from "react";
import './todo-form.styles.scss'
interface TodoFormProps {
    addTodo: (arg: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({addTodo}: TodoFormProps): JSX.Element => {
    const todoInput = useRef<HTMLInputElement | null>(null)
    const handleSubmit = (e:React.FormEvent):void => {
        e.preventDefault()
        if (!!todoInput.current?.value) {
            addTodo(todoInput.current.value)
            todoInput.current.value= ''
        }
    }
    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input ref={todoInput} type='text'/>
        </form>
    )
}

export default TodoForm