import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    getTodos: (state) =>
      state.todos.sort((a, b) => {
        return a.id - b.id;
      }),
  },

  mutations: {
    ADD_TODO: (state, payload) => {
      const newTask = {
        id: payload.newId,
        task: payload.task,
        isEdit: payload.isEdit,
        completed: false,
      };
      state.todos.unshift(newTask);
    },

    CHECKED_TODO: (state, payload) => {
      const checkedTask = state.todos.find((todo) => todo.id === payload);
      checkedTask.completed = !checkedTask.completed;
    },

    EDIT_TODO: (state, payload) => {
      const newTodos = state.todos.map((todo) => {
        if (payload === todo.id) {
          return {
            ...todo,
            isEdit: !todo.isEdit,
          };
        }
        return todo;
      });

      state.todos = newTodos;
    },

    UPDATE_TODO: (state, payload) => {
      const updatedTodos = state.todos.map((todo) => {
        if (payload.taskId === todo.id) {
          return {
            ...todo,
            task: payload.task,
            isEdit: !todo.isEdit,
          };
        }
        return todo;
      });
      state.todos = updatedTodos;
    },

    DELETE_TODO: (state, payload) => {
      const deleteTask = state.todos.findIndex((todo) => todo.id === payload);
      state.todos.splice(deleteTask, 1);
    },
  },

  actions: {
    addTodo: (context, payload) => {
      context.commit("ADD_TODO", payload);
    },
    checkedTodo: (context, payload) => {
      context.commit("CHECKED_TODO", payload);
    },
    editTodo(context, payload) {
      context.commit("EDIT_TODO", payload);
    },
    updateTodo: (context, payload) => {
      context.commit("UPDATE_TODO", payload);
    },
    deleteTodo: (context, payload) => {
      context.commit("DELETE_TODO", payload);
    },
  },
});
