// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ContactDetailsView from './views/ContactDetailsView.vue';
import AddContactView from './views/AddContactView.vue';
import EditContactView from './views/EditContactView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/contact/:id', name: 'ContactDetails', component: ContactDetailsView },
  { path: '/add-contact', name: 'AddContact', component: AddContactView },
  { path: '/edit-contact/:id', name: 'EditContact', component: EditContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
