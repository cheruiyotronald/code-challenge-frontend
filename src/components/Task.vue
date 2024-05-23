<template>
  <div>
    <h2>Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }} - {{ task.description }} - {{ task.due_date }}
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
    <form @submit.prevent="createTask">
      <input type="text" v-model="newTask.name" placeholder="Task name" required>
      <input type="text" v-model="newTask.description" placeholder="Description" required>
      <input type="date" v-model="newTask.due_date" required>
      <button type="submit">Create Task</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tasks: [],
      newTask: {
        name: '',
        description: '',
        due_date: ''
      }
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      axios.get('http://127.0.0.1:8000/api/tasks')
        .then(response => {
          this.tasks = response.data;
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    },
    createTask() {
      axios.post('http://127.0.0.1:8000/api/tasks', this.newTask)
        .then(response => {
          this.tasks.push(response.data);
          this.newTask = {
            name: '',
            description: '',
            due_date: ''
          };
        })
        .catch(error => {
          console.error('Error creating task:', error);
        });
    },
    deleteTask(id) {
      axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`)
        .then(() => {
          this.tasks = this.tasks.filter(task => task.id !== id);
        })
        .catch(error => {
          console.error('Error deleting task:', error);
        });
    }
  }
};
</script>
