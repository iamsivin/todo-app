<template>
  <ul class="tasks">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="task"
      :class="{ completed: todo.completed }"
    >
      <span class="delete" @click="deleteTodo(todo.id)">
        <ion-icon name="trash-outline"></ion-icon>
      </span>
      <span class="update-edit" v-if="!todo.isEdit" @click="editTodo(todo)">
        <ion-icon name="create-outline"></ion-icon>
      </span>
      <span class="id">{{ todo.id }}. </span>
      <span class="task-result" @click="checkedTodo(todo)" v-if="!todo.isEdit">
        {{ todo.task }}
      </span>
      <input v-if="todo.isEdit" v-model="updateTask" class="update-input" />
      <span
        class="update-edit"
        v-if="todo.isEdit"
        v-on:keyup.enter="updateTodo()"
        @click="updateTodo(todo.id)"
      >
        <ion-icon name="checkmark-done-circle-outline"></ion-icon>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      updateTask: "",
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  methods: {
    checkedTodo: function(todo) {
      this.$store.dispatch("checkedTodo", todo.id);
    },
    editTodo: function(todo) {
      this.updateTask = todo.task;
      this.$store.dispatch("editTodo", todo.id);
    },
    updateTodo: function(taskId) {
      this.$store.dispatch("updateTodo", { taskId, task: this.updateTask });
    },
    deleteTodo: function(id) {
      this.$store.dispatch("deleteTodo", id);
    },
  },
};
</script>

<style>
.tasks {
  width: 100%;
  padding: 0;
  list-style-type: none;
}

.task {
  padding: 0.6rem;
  margin-bottom: 0.5rem;
  border: 0.5px solid rgb(223, 223, 223);
  border-radius: 5px;
  color: #008cba;
  font-weight: bold;
}

.task:before {
  content: "\0020";
}

.task:hover {
  cursor: pointer;
}

.id {
  float: left;
  font-size: 1rem;
  margin-right: 0.2rem;
}

.update-input {
  width: 75%;
  border: 0.3px solid rgb(227, 227, 227);
  padding: 0.1rem;
  color: #41a7c9;
  border-radius: 2px;
  font-weight: bold;
  font-size: 0.9rem;
}

.delete {
  color: #d22;
  float: right;
  width: 2rem;
  font-size: 1.5rem;
  height: 1.25rem;
  cursor: pointer;
  text-align: center;
}

.update-edit {
  color: rgb(196, 161, 7);
  float: right;
  margin-left: 0.2rem;
  width: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
}

.completed {
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  text-decoration-color: #e12c2c;
}
</style>
