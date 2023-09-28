export interface Todo {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActions {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodo {
    type: TodoActions.FETCH_TODO;
}

interface FetchTodoSuccess {
    type: TodoActions.FETCH_TODO_SUCCESS;
    payload: [];
}

interface FetchTodoError {
    type: TodoActions.FETCH_TODO_ERROR;
    payload: string;
}

interface SetTodoPage {
    type: TodoActions.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction = FetchTodo | FetchTodoSuccess | FetchTodoError | SetTodoPage;