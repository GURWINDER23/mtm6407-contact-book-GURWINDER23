<!-- src/views/HomeView.vue -->
<template>
  <div class="container mt-4">
    <h1>Contact Book</h1>
    <div class="mb-3">
      <input v-model="search" class="form-control" placeholder="Search contacts" />
    </div>
    <ul class="list-group">
      <li v-for="contact in filteredContacts" :key="contact.id" class="list-group-item">
        <router-link :to="{ name: 'ContactDetails', params: { id: contact.id } }">
          {{ contact.firstName }} {{ contact.lastName }}
        </router-link>
      </li>
    </ul>
    <router-link to="/add-contact" class="btn btn-primary mt-3">Add New Contact</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      contacts: [],
    };
  },
  created() {
    this.loadContacts();
  },
  methods: {
    loadContacts() {
      const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      this.contacts = storedContacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
