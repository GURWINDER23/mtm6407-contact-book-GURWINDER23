<!-- src/views/ContactDetailsView.vue -->
<template>
    <div class="container mt-4">
      <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
      <p>Email: {{ contact.email }}</p>
      <div class="d-flex gap-2">
        <router-link :to="{ name: 'EditContact', params: { id: contact.id } }" class="btn btn-warning">
          Edit
        </router-link>
        <button @click="deleteContact" class="btn btn-danger">Delete</button>
        <router-link to="/" class="btn btn-secondary">Back to Contacts</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contact: null,
      };
    },
    created() {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      this.contact = contacts.find((c) => c.id === this.$route.params.id);
    },
    methods: {
      deleteContact() {
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts = contacts.filter((c) => c.id !== this.contact.id);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/');
      },
    },
  };
  </script>
  