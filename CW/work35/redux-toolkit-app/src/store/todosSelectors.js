import {todosAdapter} from "./todosSlice";

export const {
    selectById: selectTodoById,
    selectIds: selectTodoIds,
    selectEntities: selectTodoEntities,
    selectAll: selectAllTodos,
    selectTotal: selectTotalTodos,
} = todosAdapter.getSelectors((state) => state.todos)
