<template>
  <div class="home_page">
    <Wrapper bgColor="rgb(87, 117, 144)">
      <div class="page_content_fir">
        <h3>Our superiority</h3>
        <div class="flex_box">
          <div class="description">
            <h4>Products</h4>
            <p>Shimless for popular hologram patterns/lens patterns.</p>
            <h4>Price</h4>
            <p>
              No middle man ,no worry! Get your hologrphic film at unbeatable
              prices, straight from the source.
            </p>
            <h4>Quality</h4>
            <p>2 rounds of quality inspection.</p>
          </div>
          <div class="bg_img"></div>
        </div>
      </div>
    </Wrapper>
    <About />
  </div>
</template>

<script setup>
// Home
import About from "@/components/About.vue";
import Wrapper from "@/components/Wrapper.vue";
</script>

<style lang="scss" scoped>
.home_page {
  .page_content_fir {
    width: 1440px;
    height: 930px;
    padding: 80px 120px;
    background: rgb(87, 117, 144);
    margin: 0 auto;
    h3 {
      font-size: 60px;
      color: #fff;
      font-weight: bolder;
    }
    .flex_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .description {
      width: 440px;
      h4 {
        font-size: 25px;
        color: #fff;
        font-weight: bolder;
        margin-top: 60px;
      }
      p {
        font-size: 20px;
        color: #fff;
        font-weight: 500;
        margin-bottom: 40px;
      }
    }
    .bg_img {
      width: 550px;
      height: 550px;
      background: url(../assets/img/bg_img.webp) no-repeat 100% 100%;
      border-radius: 8px;
    }
  }
}
</style>
