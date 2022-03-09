export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionsTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodoAction {
    type: TodoActionsTypes.FETCH_TODOS
}

interface FetchSuccessAction {
    type: TodoActionsTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface FetchErrorAction {
    type: TodoActionsTypes.FETCH_TODOS_ERROR,
    payload: string;
}

interface SetTodoPage {
    type: TodoActionsTypes.SET_TODO_PAGE,
    payload: number;
}

export type TodoAction = FetchTodoAction | FetchSuccessAction | FetchErrorAction | SetTodoPage