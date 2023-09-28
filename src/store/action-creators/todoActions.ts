import { Dispatch } from "react"
import axios from "axios"
import { TodoAction, TodoActions } from "../../types/todo"


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActions.FETCH_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            });
            dispatch({type: TodoActions.FETCH_TODO_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodoActions.FETCH_TODO_ERROR, payload: 'Произошла ошибка при загрузке списка дел'})
        }
    }
};

export const setPageTodo = (page: number): TodoAction => {
    return {type: TodoActions.SET_TODO_PAGE, payload: page};
};