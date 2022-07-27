import { v4 as uuid } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    activeTodos: Todo[];
    completedTodos: Todo[];
    ongoingList: Todo[];
}

const initialState: TodoState = {
    todos: [],
    activeTodos: [],
    completedTodos: [],
    ongoingList: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            const secondTodo = {
                id: uuid(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(secondTodo);
			state.activeTodos.push(secondTodo);
            state.ongoingList = state.todos;
        },
        setCompleted(state, action: PayloadAction<string>) {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo?.completed === false) {
                todo.completed = !todo.completed;
                state.activeTodos = state.activeTodos.filter(
                    (item) => item.id !== todo.id
                );
                state.completedTodos.push(todo);
            } else {
                if (todo?.completed === true) {
                    todo.completed = !todo.completed;
                    state.completedTodos = state.completedTodos.filter(
                        (item) => item.id !== todo.id
                    );
                    state.activeTodos.push(todo);
                }
            }
            const ongoingTodo = state.ongoingList.find(
                (todo) => todo.id === action.payload
            );
            if (ongoingTodo) {
                ongoingTodo.completed = !ongoingTodo.completed;
            }
        },
        showAll(state) {
            state.ongoingList = state.todos;
        },
        showActive(state) {
            state.ongoingList = state.activeTodos;
        },
        showCompleted(state) {
            state.ongoingList = state.completedTodos;
        },

        // Пытался сделать полноценное удаление завершенных задач, но почему-то ругается на меня vs:( поэтому решил, 
        // что будет возвращение к невыполненной задаче
        clearCompleted(state) {
            state.completedTodos.length = 1;

            state.todos = state.todos.map((todo) => {
                return {
                    ...todo,
                    completed: false,
                };
            });

            state.activeTodos = [...state.todos];
            state.ongoingList = state.todos;
        },
    },
});

export const {
    addTodo,
    setCompleted,
    showAll,
    showActive,
    showCompleted,
    clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
