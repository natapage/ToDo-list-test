<script setup>
import { ref, onMounted } from "vue";
import { getTasks } from "../api.js";

const tasks = ref({});

async function fetchPage() {
  tasks.value = await getTasks();
  console.log(tasks.value);
}

onMounted(() => {
  fetchPage();
});
</script>

<template>
  <div class="task-item" v-for="(task, index) in tasks.data" :key="task.id">
    <div class="task-name">{{ task.attributes.name }}</div>
    <div class="task-description">{{ task.attributes.description }}</div>
  </div>
</template>

<style scoped>
.task-item {
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
