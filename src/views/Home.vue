<template>
  <div class="home_page">
    <Wrapper bgColor="rgb(87, 117, 144)">
      <div class="page_content_fir">
        <h3>Our superiority</h3>
        <div class="flex_box">
          <div class="description">
            <h4>Advanced production plant and equipment</h4>
            <p>
              has various types of advanced production equipment,can reach 20
              million meters per month,  product quality and stability, by our
              customers.
            </p>
            <h4>Products</h4>
            <p>
              Shimless popular Hologram Patterns & Lens Patterns More than 200
              standard patterns to meet different products needs  Can design and
              produce customer-specific pattern for the customer's requirements,
              and continue to develop more advanced and more reliable laser
              products to provide the most professional of the original products
              to our customers
            </p>
            <h4>Professional Team</h4>
            <p>
              We are rich in experience in the production, packaging, printing,
              design, we can make the customer recognition and understanding of
              the laser products and later processing services. With broad
              international vision, we keep good communication with customers,
              and provide more tailored products.
            </p>
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
      width: 550px;
      h4 {
        font-size: 25px;
        color: #fff;
        font-weight: bolder;
        margin-top: 60px;
      }
      p {
        font-size: 18px;
        color: #fff;
        font-weight: 500;
        margin-bottom: 30px;
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
