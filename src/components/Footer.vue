<template>
    <div class="page_footer">
        <div class="copyright_content">
            <CopyrightCircleOutlined style="font-size: 12px; margin: 8px 4px 0 0; color: #666;"/> 
            2023 Holofilm Technology Co.,Ltd
        </div>
    </div>
</template>

<script setup>
import { CopyrightCircleOutlined } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
.page_footer {
    width: 1440px;
    height: 130px;
    margin: 0 auto;
    padding: 0 120px;
    font-size: 16px;
    padding-top: 80px;
    .copyright_content {
        display: flex;
        align-content: center;
    }
}
</style>