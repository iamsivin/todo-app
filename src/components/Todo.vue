<template>
  <div>
    <todo-input />
  </div>
</template>

<script>
import TodoInput from "./TodoInput";
export default {
  components: {
    TodoInput,
  },
};
</script>

<style>
div {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
