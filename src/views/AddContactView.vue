<template>
    <div class="container mt-4">
      <h1>Add New Contact</h1>
      <form @submit.prevent="addContact">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input v-model="firstName" class="form-control" id="firstName" required />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input v-model="lastName" class="form-control" id="lastName" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" id="email" required />
        </div>
        <button type="submit" class="btn btn-primary">Add Contact</button>
      </form>
      <router-link to="/" class="btn btn-secondary mt-3">Back to Contacts</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    },
    methods: {
      addContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        const newContact = {
          id: Date.now().toString(),
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        };
        contacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push({ name: 'ContactDetails', params: { id: newContact.id } });
      },
    },
  };
  </script>
  