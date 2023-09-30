import React, { useEffect } from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActionCreator } from "./hooks/useActionCreator";


const TodoList: React.FC = () => {
    const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo);
    const pages = [1, 2, 3, 4, 5];
    const {fetchTodos, setPageTodo} = useActionCreator();

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div style={{marginTop: '40px'}}>
                {todos.map(todo => (
                    <div key={todo.id}>{todo.id} - {todo.title}</div>
                ))}
            </div>
            <div style={{display: 'flex', gap: '20px', marginTop: '60px'}}>
                {pages.map(p => (
                    <div onClick={() => setPageTodo(p)}
                        style={{border: p === page ? '1px solid red' : '1px solid black', width: '30px', cursor: 'pointer'}}
                    >
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;