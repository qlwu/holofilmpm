<template>
  <div class="catalogue_page">
    <div class="catalogue_list">
      <a-row wrap>
        <a-col v-for="name in list" :key="name" :span="6">
          <a-card
            class="catalogue_item"
            :bodyStyle="{ padding: 0 }"
            hoverable
          >
            <div class="catalogue_img">
                <img alt="example" :src="`./img/catalogue/${name}.BMP`" />
            </div>
            <h3>{{ name }}</h3>
          </a-card>
        </a-col>
      </a-row>
      <div class="pagination">
        <a-pagination v-model:current="pageNo" v-model:pageSize="pageSize" total="141" :showSizeChanger="false"></a-pagination>
      </div>
    </div>
    <About />
  </div>
</template>

<script setup>
// catalogue
import { computed, ref, onBeforeMount } from 'vue';
import About from '@/components/About.vue';
import _ from 'lodash';
// 生成catalogue列表
let imgList = Array(141).fill(0);
for (let i = 0; i<imgList.length; i++) {
    let index = i + 1;
    index = i < 9 ? `0${index}` : index;
    imgList[i] = `HF${index}`
}
const total = ref(imgList.length);
const pageNo = ref(1);
const pageSize = ref(8);

const list = computed(() => {
    return _.cloneDeep(imgList).splice((pageNo.value - 1) * pageSize.value, pageSize.value);
})
</script>

<style lang="scss" scoped>
.catalogue_list {
  width: 1440px;
  margin: 0 auto;
  padding: 80px 120px;
}

.catalogue_item {
  height: 250px;
  margin: 0 20px 20px 0;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  .catalogue_img {
    width: 100%;
    height: 220px;
    img {
        width: 100%;
        height: 100%;
        display: block;
    }
  }
  h3 {
    color: #fff;
    background: rgba(0, 0, 0, 0.9);
    font-size: 18px;
    text-align: center;
    margin: 0;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  p {
    color: rgba(174, 174, 174, 1);
    font-size: 16px;
  }
}

.pagination {
    padding: 15px 10px;
    text-align: right;
}
</style>