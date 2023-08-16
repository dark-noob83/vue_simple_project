<template>
  <div v-if="loading" class="m-5 spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4">
    <cardview :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import cardview from "@/components/CardView.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    cardview,
  },
  setup() {
    const route = useRoute();
    const user = ref({});
    const loading = ref(true);
    function getUserId() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          loading.value = false;
          user.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUserId();
    return {
      user,
      loading,
    };
  },
};
</script>

<style>
</style>