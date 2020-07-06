let nextTodoId = 4;

// action creators

export const addTodo = (name) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        name
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}