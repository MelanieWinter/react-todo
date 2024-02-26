import { useState } from "react"

export default function TodoForm({ addTodo }) {
    const [newTodo, setNewTodo] = useState('')

    function handleChange(event){
        setNewTodo(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write something..."
                value={newTodo}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}