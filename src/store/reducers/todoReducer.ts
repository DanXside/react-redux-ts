import { Todo, TodoAction, TodoActions } from "../../types/todo";


const initialState: Todo = {
    error: null,
    limit: 10,
    loading: false,
    page: 1,
    todos: []
};

export const todoReducer = (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case TodoActions.FETCH_TODO:
            return {...state, loading: true};
        case TodoActions.FETCH_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload};
        case TodoActions.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload};
        case TodoActions.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default: 
            return state;
    }
}