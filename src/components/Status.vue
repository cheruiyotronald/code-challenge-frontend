<template>
  <div>
    <h2>Statuses</h2>
    <ul>
      <li v-for="status in statuses" :key="status.id">
        {{ status.name }}
        <button @click="deleteStatus(status.id)">Delete</button>
      </li>
    </ul>
    <form @submit.prevent="createStatus">
      <input type="text" v-model="newStatus.name" placeholder="Status name" required>
      <button type="submit">Create Status</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      statuses: [],
      newStatus: {
        name: ''
      }
    };
  },
  created() {
    this.fetchStatuses();
  },
  methods: {
    fetchStatuses() {
      axios.get('http://127.0.0.1:8000/api/statuses')
        .then(response => {
          this.statuses = response.data;
        })
        .catch(error => {
          console.error('Error fetching statuses:', error);
        });
    },
    createStatus() {
      axios.post('http://127.0.0.1:8000/api/statuses', this.newStatus)
        .then(response => {
          this.statuses.push(response.data);
          this.newStatus = {
            name: ''
          }; 
        })
        .catch(error => {
          console.error('Error creating status:', error);
        });
    },
    deleteStatus(id) { 
      axios.delete(`/api/statuses/${id}`)
        .then(() => {
          this.statuses = this.statuses.filter(status => status.id !== id); 
        })
        .catch(error => {
          console.error('Error deleting status:', error);
        });
    }
  }
};
</script>
 
<style>

</style>
