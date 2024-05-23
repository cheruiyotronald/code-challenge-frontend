import Vue from 'vue';
import VueRouter from 'vue-router';
import User from './components/User.vue';
import Login from './components/Login.vue';
import TaskTable from './components/TaskTable.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: User },
  { path: '/login', component: Login },
  { path: '/tasks', component: TaskTable, meta: { requiresAuth: true } } 
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
