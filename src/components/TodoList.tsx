import React, { useEffect } from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActionCreator } from "./hooks/useActionCreator";


const TodoList: React.FC = () => {
    const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo);
    const {fetchTodos} = useActionCreator();

    useEffect(() => {
        fetchTodos();
    }, []);

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>{todo.id} - {todo.name}</div>
            ))}
        </div>
    );
};

export default TodoList;