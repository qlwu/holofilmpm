<template>
  <div class="page_header">
    <div class="logo"></div>
    <div class="navigator">
      <span
        v-for="route in routes"
        :key="route"
        :class="[activeRoute == route && 'is_active']"
        @click="onClick(route)"
      >
        {{ route }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const activeRoute = computed(() => {
  return route.name;
});
const routes = ref([
  "Home",
  "Product",
  "Catalogue",
  "Factory Equipment",
  "Contact",
]);

const onClick = (route) => {
  router.push({ name: route });
};
</script>

<style lang="scss" scoped>
.page_header {
  width: 1440px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  .logo {
    width: 90px;
    height: 90px;
    background: url(../assets/img/Holofilm.jpg) no-repeat;
    background-size: contain;
  }

  .navigator {
    span {
      color: rgba(0, 0, 0, 1);
      font-size: 18px;
      padding-left: 40px;
      cursor: pointer;
    }
    .is_active {
      color: rgba(56, 144, 255, 1);
    }
  }
}
</style>
