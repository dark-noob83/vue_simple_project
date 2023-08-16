<template>
  <div v-if="loading" class="m-5 spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else v-for="user in users" :key="user.id" class="col-md-4">
    <cardview :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import cardview from "@/components/CardView.vue";
export default {
  components: {
    cardview,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);
    function getUserId() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          loading.value = false;
          users.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUserId();
    return {
      users,
      loading,
    };
  },
};
</script>

<style>
</style>