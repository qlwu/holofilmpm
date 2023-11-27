<template>
  <div class="product_page">
    <div class="product_list">
      <a-tabs v-model:activeKey="activeKey" tabPosition="left">
        <a-tab-pane
          v-for="{ name, desc } in productList"
          :tab="name"
          :key="name"
        >
          <div class="product_item">
            <h3>{{ activeKey }}</h3>
            <p>{{ desc }}</p>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
    <About />
  </div>
</template>

<script setup>
// Product
import { ref } from "vue";
import About from "@/components/About.vue";

const activeKey = ref("PET metalized lamination film");

const productList = ref([
  {
    name: "PET metalized lamination film",
    desc: "is usually laminated on a printing substrate for re-stocking with paper such as copper paper, white cardboard, gray cardboard, and other paper products. According to the customer's needs,the information side can be inward or outwards. The composite film is suitable for medium and high-grade wine box packaging, medicine boxes, cosmetic boxes, gift boxes, and the like.",
  },
  {
    name: "PET Metalized Transfer film",
    desc: "is usually laminated on copper plate, white card and gray cardboard to transfer the layer information to the paper. It is mainly used in high-grade cigarette packets, wine bags, cosmetics and other fields.",
  },
  {
    name: "PET dielectric(HRI) lamination film",
    desc: "is usually laminated on a printing substrate for re-stocking with paper such as copper paper, white cardboard, gray cardboard, and other paper products. According to the customer's needs,the information side can be inward or outwards. The composite film is suitable for medium and high-grade wine box packaging, medicine boxes, cosmetic boxes, gift boxes, and the like",
  },
  {
    name: "PET Dielectric(HRI) Transfer Film",
    desc: "The dielectric is transparent and can increase the reflective index.Transfer film is usually laminated on copper plate, white card and gray cardboard to transfer the layer information to the paper. It is mainly used in high-grade cigarette packets, wine bags, cosmetics and other fields.",
  },
  {
    name: "PET Lens Film",
    desc: "Continious pattern, shimless, help you solve the energy-saving and efficient problems you have been exploring ,it has novel effect and wide application ,can be used for your choice , perfectly combined with your products , bring you the perfect perspective impact and enhance your brand image, and win the full applasuse for you to seize the market opportunity!",
  },
  {
    name: "Holographic anti-counterfeiting label / sticker.",
    desc: "It can be made as normal adhesive sticker, fragile material sticker and tamper evident sticker. And it can be applied on paper, glass, metal, plastic and wood.",
  },
  {
    name: "Comprehensive anti-counterfeiting label",
    desc: "Printing+stamping+coding sticker:Hologram positioning printing+coding+stamping sticker:The sticker is made of self-adhesive coated paper, fragile paper, or PET, and then printed with custom pattern and stamp.It can be made as normal adhesive sticker, fragile material sticker and tamper evident sticker. And it can be applied on paper, glass, metal, plastic and wood.",
  },
]);
</script>

<style lang="scss" scoped>
.product_list {
  width: 1440px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 40px 30px;
}

.product_item {
  height: 300px;
  margin: 0 20px 0 0;
  border-color: #eee;
  padding: 0 40px 20px 40px;

  h3 {
    color: rgba(56, 144, 255, 1);
    font-size: 30px;
  }

  p {
    color: #333;
    font-size: 20px;
    margin-top: 30px;
  }
}
</style>
