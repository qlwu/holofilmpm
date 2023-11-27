<template>
  <div class="contact_page">
    <div class="contact_box">
      <a-card class="content">
        <h3>Contact Us</h3>
        <!-- <h4>Contact Us</h4> -->
        <p class="tit"></p>
        <div class="info">
          <div class="info_item">
            <div class="icon">
              <img
                :src="require('@/assets/icon/location.png')"
                alt="location"
              />
            </div>
            <p class="info_name">ADD</p>
            <p class="info_content">
              1201, BUILDING8, QINGLV NORTH ROAD NO.3999, TANGJIA TOWN,
              HIGH-TECH ZONE, ZHUHAI , GUANGDONG
            </p>
          </div>
          <div class="info_item">
            <div class="icon">
              <img :src="require('@/assets/icon/phone.png')" alt="phone" />
            </div>
            <p class="info_name">PHONE</p>
            <p class="info_content">+86 15919149295</p>
          </div>
          <div class="info_item">
            <div class="icon">
              <img :src="require('@/assets/icon/mail.png')" alt="mail" />
            </div>
            <p class="info_name">Email</p>
            <p class="info_content">tracy@holofilm-pm.com</p>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script setup>
// Contact
</script>

<style lang="scss" scoped>
.contact_page {
  .contact_box {
    width: 1440px;
    margin: 0 auto;
    padding: 50px 160px;
    .content {
      border: 1px solid #eee;
      border-radius: 16px;
      // box-shadow: -2px 2px 8px rgba(0,0,0,.05);
      // padding: 20px;
      border: 0;
    }
    h3 {
      text-align: center;
      color: rgba(77, 173, 247, 1);
      font-size: 48px;
      margin: 5px 0;
    }
    h4 {
      text-align: center;
      color: rgba(102, 102, 102, 1);
      font-size: 30px;
      margin: 5px 0;
    }
    .tit {
      padding: 20px 0;
      border-bottom: 1px solid #eee;
      font-size: 16px;
      color: #666;
      font-weight: bold;
    }

    .info {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
      .info_item {
        text-align: center;
        flex: 1;
        .icon {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 20px auto;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info_name {
          color: #333;
          font-size: 20px;
          margin: 8px 0;
          color: rgba(77, 173, 247, 1);
        }

        .info_content {
          color: #666;
          font-size: 16px;
          margin: 2px 0;
        }
      }
    }
  }
}
</style>
