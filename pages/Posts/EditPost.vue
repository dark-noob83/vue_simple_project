<template>
  <div v-if="pageloading" class="m-5 spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else>
    <h2 class="mb-3">Edit post :</h2>
    <div class="col-md-5">
      <FormComponent @FormData="updatepost" :button-loading="loading" :post="post"  button-text="Edit Post"/>
      
    </div>

  </div>
</template>
  
  <script>
import FormComponent from "@/components/FormComponent.vue";

import axios from "axios";
import Swal from "sweetalert2";
import { ref  } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components:{
    FormComponent
  },
  setup() {
    const loading = ref(false);
    const pageloading = ref(true);
    const post = ref({});
    const route = useRoute();
    
    
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          // loading.value = false;
          pageloading.value=false
          post.value=response.data
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPost();
  
    function updatepost(form){
      loading.value = true;
      
        axios
          .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
            id: route.params.id,
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
              text: "Post Update succesfully",
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    }
    return {updatepost ,pageloading, loading  , post};
  },
};
</script>
  
  <style>
</style>