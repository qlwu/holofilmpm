<template>
  <div class="get_started">
    <h3 class="title">About Holofilm Tech</h3>
    <p class="description">
      Holofilm Technology Co., Ltd was established in 2016 and located in Zhuhai
      City,Guangdong Province, China. A leading global supplier of
      anti-counterfeiting technology products.After years of efforts, we have
      selected the best quality holographic film for our customers. we have a
      research and development team, technical service team, customer service
      team, logistics and distribution team.  It has become a powerful
      enterprise in the packaging material industry. At present, a large number
      of products are exported to more that 30 countrious such as Japan, South
      Korea, Thailand, Malaysia, Indonesia, Russia, Europe and the United States
      etc., The quality for survival and the service for the development is our
      company`s managerment philosophy
    </p>
    <a-button class="contact_btn" @click="$router.push({ name: 'Contact' })"
      >Contact Us</a-button
    >
    <div class="shape">
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.get_started {
  width: 1440px;
  height: 750;
  padding: 150px 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .title {
    font-size: 60px;
  }
  .description {
    font-size: 20px;
    width: 1000px;
    // text-align: center;
    line-height: 32px;
  }
  .contact_btn {
    width: 120px;
    height: 50px;
    background: rgb(248, 150, 30);
    font-size: 16px;
    border-radius: 12px;
    margin-top: 15px;
    position: relative;
  }
}

.shape {
  width: 700px;
  height: 700px;
  display: flex;
  align-content: center;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateZ(60deg);
  top: 0;
  left: 0;
  span {
    display: block;
    width: 100%;
    height: 350px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:nth-of-type(1) {
      width: 350px;
      height: 100%;
    }
  }
}
</style>
