<template>
  <div class="card">
    <router-link
      :to="{ name: 'userid', params: { id: user.id } }"
      class="text-decoration-none text-center text-dark py-2"
      >{{ user.name }}
    </router-link>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username : {{ user.username }}</li>
      <li class="list-group-item">Email : {{ user.email }}</li>
      <li class="list-group-item">Phone : {{ user.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style>
</style>