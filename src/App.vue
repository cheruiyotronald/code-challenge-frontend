<template>
  <div id="app">
    <task-component></task-component>
    <status-component></status-component>
    <user-component></user-component>
  </div>
</template>

<script>
import TaskComponent from './components/Task.vue';
import StatusComponent from './components/Status.vue';
import UserComponent from './components/User.vue';

export default {
  components: {
    TaskComponent,
    StatusComponent,
    UserComponent
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.container {
  text-align: center; 
}
</style>
