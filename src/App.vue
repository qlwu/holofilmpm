<template>
  <div class="app">
    <Header />
    <Banner />
    <router-view />
    <Footer />
    <a-back-top />
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.app {
  font-family: "Times New Roman", Times;
}
</style>
