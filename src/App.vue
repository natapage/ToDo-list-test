<script setup>
import { ref } from "vue";
import ToDoForm from "./components/ToDoForm.vue";
import ToDoList from "./components/ToDoList.vue";
</script>

<template>
  <div class="app">
    <to-do-form></to-do-form>
    <to-do-list></to-do-list>
  </div>
</template>

<style scoped></style>
