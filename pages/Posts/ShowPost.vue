<template>
  <div v-if="loading" class="m-5 spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4">
    <div class="card">
      <div class="text-center card-header">
        {{ post.title }}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.body }}</li>
    </ul>
        <div class="card-footer">
        <button @click="deletePost" class="btn btn-danger mr3">Dalete</button>
        <router-link :to="{name:'editpost' , params:{id:post.id}}" class="btn btn-dark">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from 'sweetalert2';
export default {
  setup() {
    const post = ref([]);
    const loading = ref(true);
    const route = useRoute();
    function getPostId() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          loading.value = false;
          post.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPostId();
    function deletePost(){
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: "Thanks!",
            text: `Post (${route.params.id}) deleted succesfully`,
            icon: "warning",
            confirmButtonText: "OK",
          });
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    return {
      post,
      loading,
      deletePost,
    };
  },
};
</script>

<style>
</style>