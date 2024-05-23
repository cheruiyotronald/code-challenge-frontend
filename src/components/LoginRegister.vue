<!-- // LoginRegister.vue
<template>
  <div>
    <!-- Login Form -->
    <form v-if="loginMode" @submit.prevent="login">
      <!-- Login form fields -->
      <button type="submit">Login</button>
    </form>
    
    <!-- Registration Form -->
    <form v-else @submit.prevent="register">
      <!-- Registration form fields -->
      <button type="submit">Register</button>
    </form>

    <!-- Toggle between login and register mode -->
    <button @click="toggleMode">{{ loginMode ? 'Register' : 'Login' }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginMode: true // Initially show login form
    };
  },
  methods: {
    login() {
      // Implement login functionality
    },
    register() {
      // Implement registration functionality
    },
    toggleMode() {
      this.loginMode = !this.loginMode; // Toggle between login and register mode
    }
  }
};
</script> -->
