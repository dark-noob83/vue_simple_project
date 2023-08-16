<template>
  <h2 class="mb-3">Create post :</h2>
  <div class="col-md-5">
    <FormComponent @FormData="createpost" :button-loading="loading" button-text="Create Post" />
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "vue";
export default {
  components: {
    FormComponent,
  },
  setup() {
    const loading = ref(false);
    
    function createpost(form) {
      loading.value = true;
      
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function () {
          // handle success
          // loading.value = false;
          loading.value = false;
          
          Swal.fire({
            title: "Thanks!",
            text: "Post created succesfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    return { createpost , loading };
  },
};
</script>

<style>
</style>