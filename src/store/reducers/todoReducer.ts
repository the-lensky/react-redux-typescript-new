import {TodoAction, TodoActionsTypes, TodoState} from "../../types/todo";
import {UserState} from "../../types/user";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 5,
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionsTypes.FETCH_TODOS:
            return {...state, loading: true}

        case TodoActionsTypes.FETCH_TODOS_SUCCESS:
            return {...state,loading:false,todos:action.payload}

        case TodoActionsTypes.FETCH_TODOS_ERROR:
            return {error: null, limit: 5, loading: true, page: 1, todos: []}

        case TodoActionsTypes.SET_TODO_PAGE:
            return {error: null, limit: 5, loading: true, page: 1, todos: []}


        default:
            return state
    }

}