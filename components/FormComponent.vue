<template>
  <form @submit.prevent="isValid">
    <div class="mb-3">
      <label class="form-label">title</label>
      <input type="text" class="form-control" v-model.lazy.trim="form.title" />
      <div id="emailHelp" class="form-text text-danger">
        {{ form.titleErorText }}
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Body</label>
      <textarea
        rows="6"
        class="form-control"
        v-model.lazy.trim="form.body"
      ></textarea>
      <div id="emailHelp" class="form-text text-danger">
        {{ form.bodyErorText }}
      </div>
    </div>
    <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
      <div
        v-if="buttonLoading"
        class="spinner-border spinner-border-sm"
        role="status"
      ></div>
      {{ buttonText }}
    </button>
    
  </form>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    buttonText:String,
    buttonLoading: Boolean,
    post : Object
  },
  setup(props, { emit }) {

    const form = reactive({
      title: "",
      titleErorText: "",
      body: "",
      bodyErorText: "",
    });
    function changes(){
      
      if(props.post !==undefined){
        form.title=props.post.title
        form.body=props.post.body
        
      }
    }
changes()
    function isValid() {
    

      if (form.title === "") {
        form.titleErorText = "title cant be empty";
      } else {
        form.titleErorText = "";
      }
      if (form.body === "") {
        form.bodyErorText = "body cant be empty";
      } else {
        form.bodyErorText = "";
      }
      if (form.body !== "" && form.title !== "") {
        emit("FormData", form);
        
      }
    }
    return { form, isValid };
  },
};
</script>

<style>
</style>