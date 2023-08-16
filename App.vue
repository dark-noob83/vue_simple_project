<template>
  <div>
    <HeaderComponents/>
  </div>
  <router-view></router-view>
</template>

<script>
import HeaderComponents from "./components/HeaderComponents.vue";
export default {
  components: { HeaderComponents },
};
</script>

<style>
</style>
