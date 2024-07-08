<template>
    <div class="container mt-4">
      <h1>Edit Contact</h1>
      <form @submit.prevent="updateContact">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input v-model="contact.firstName" class="form-control" id="firstName" required />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input v-model="contact.lastName" class="form-control" id="lastName" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="contact.email" type="email" class="form-control" id="email" required />
        </div>
        <button type="submit" class="btn btn-warning">Update Contact</button>
      </form>
      <router-link to="/" class="btn btn-secondary mt-3">Back to Contacts</router-link>
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
      updateContact() {
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts = contacts.map((c) => (c.id === this.contact.id ? this.contact : c));
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push({ name: 'ContactDetails', params: { id: this.contact.id } });
      },
    },
  };
  </script>
  