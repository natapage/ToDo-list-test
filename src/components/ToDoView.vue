<script setup>
import { ref, onMounted } from "vue";
import { getTasks, createTask, deleteTask } from "../api.js";

const tasks = ref({});
const taskName = ref("");
const taskDescription = ref("");

async function fetchPage() {
  tasks.value = await getTasks();
  console.log(tasks.value);
}

async function handleDeleteTask(id) {
  await deleteTask(id);
  await fetchPage();
}

async function handleCreateTask() {
  const body = {
    name: taskName.value,
    description: taskDescription.value,
  };

  await createTask(body);
  taskName.value = "";
  taskDescription.value = "";
  await fetchPage();
}

onMounted(() => {
  fetchPage();
});
</script>

<template>
  <div class="todo-form">
    <input v-model="taskName" placeholder="Task name" />
    <input v-model="taskDescription" placeholder="Task description" />
    <button @click="handleCreateTask">Add task</button>
  </div>
  <div class="todo-task-item" v-for="task in tasks.data" :key="task.id">
    <div class="task-name">{{ task.attributes.name }}</div>
    <div class="task-description">{{ task.attributes.description }}</div>
    <button @click="() => handleDeleteTask(task.id)">delete</button>
  </div>
</template>

<style scoped>
.todo-task-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.task-name {
  font-weight: bold;
}

.task-description {
  margin-top: 5px;
}
</style>
