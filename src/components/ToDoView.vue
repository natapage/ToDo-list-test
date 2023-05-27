<script setup>
import { ref, onMounted } from "vue";
import { getTasks, createTask, deleteTask, updateTask } from "../api.js";

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

async function handleUpdateTask(isComplete, id) {
  const body = {
    completed: isComplete,
  };
  await updateTask(body, id);
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
    <button class="delete-button" @click="() => handleDeleteTask(task.id)">
      delete
    </button>
    <div class="task-actions">
      <input
        type="checkbox"
        v-model="task.attributes.completed"
        @change="() => handleUpdateTask(task.attributes.completed, task.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.todo-task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.todo-task-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #949494;
  border-radius: 5px;
  background-color: #e2e1e1;
}

.task-name {
  font-weight: bold;
}

.delete-button {
  margin-left: auto;
  background-color: #ffffff;
}
</style>
