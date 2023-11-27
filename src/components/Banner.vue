<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "Carousel",
  data() {
    return {
      list: [
        { id: 1, imgUrl: require("@/assets/img/banner_1.jpg") },
        { id: 2, imgUrl: require("@/assets/img/banner_2.jpg") },
        { id: 3, imgUrl: require("@/assets/img/banner_3.jpg") },
      ],
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 400px;
}

.swiper-slide {
  width: 100%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
