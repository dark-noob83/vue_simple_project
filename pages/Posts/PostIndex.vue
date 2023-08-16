<template>
  <div>
    <router-link class="btn btn-dark" :to="{ name: 'createpost' }">
      create post
    </router-link>
  </div>
  <div v-if="loading" class="m-5 spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else v-for="post in posts" :key="post.id" class="col-md-4">
    <div class="card">
      <router-link
        :to="{ name: 'postid', params: { id: post.id } }"
        class="text-decoration-none text-center text-dark py-2"
        >{{ post.title }}
      </router-link>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.body }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);
    function getPostId() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          loading.value = false;
          posts.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPostId();
    return {
      posts,
      loading,
    };
  },
};
</script>

<style>
</style>