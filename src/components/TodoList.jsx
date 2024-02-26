import TodoItem from "./TodoItem"

export default function TodoList({ todoItems }) {
    return (
        <>
            <div>
                {todoItems.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        content={todo.content}
                    />
                ))}
            </div>
        </>
    )
}