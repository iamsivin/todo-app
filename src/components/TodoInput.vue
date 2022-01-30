<template>
  <form @submit.prevent="addTodo">
    <div class="input-wrap">
      <input
        class="todo-input"
        type="text"
        placeholder="Enter a new task"
        v-model="task"
      />
      <button @submit="addTodo">{{ "Add" }}</button>
    </div>
    <todo-list />
  </form>
</template>

<script>
import TodoList from "./TodoList";
export default {
  components: {
    TodoList,
  },
  data() {
    return {
      task: "",
      newId: 1,
      isEdit: false,
    };
  },
  methods: {
    addTodo() {
      if (this.task !== "") {
        this.$store.dispatch("addTodo", this);
        this.newId++;
      }
      this.task = "";
    },
  },
};
</script>

<style>
form {
  width: 40%;
}

.input-wrap {
  display: flex;
}

button {
  color: white;
  background-color: #008cba;
  width: 5rem;
  border-radius: 0.5rem;
  margin-left: 0.2rem;
  border: none;
  font-weight: bold;
}

.todo-input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  border-radius: 0.5rem;
  border-style: none;
  border: solid 1px lightgray;
  box-sizing: border-box;
}
</style>
