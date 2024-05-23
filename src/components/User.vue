<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.email_address }}
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
    <form @submit.prevent="createUser">
      <input type="text" v-model="newUser.email_address" placeholder="Email address" required>
      <input type="password" v-model="newUser.password" placeholder="Password" required>
      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      newUser: {
        email_address: '',
        password: ''
      }
    };
  }, 
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('http://127.0.0.1:8000/api/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    createUser() {
      axios.post('http://127.0.0.1:8000/api/users', this.newUser)
        .then(response => {
          this.users.push(response.data);
          this.newUser = {
            email_address: '',
            password: ''
          };
        })
        .catch(error => {
          console.error('Error creating user:', error);
        });
    },
    deleteUser(id) {
      axios.delete(`http://127.0.0.1:8000/api/users/${id}`)
        .then(() => {
          this.users = this.users.filter(user => user.id !== id);
        })
        .catch(error => {
          console.error('Error deleting user:', error);
        });
    }
  }
};
</script>
