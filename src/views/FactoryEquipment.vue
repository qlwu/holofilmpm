<template>
    <div class="factory_equipment_page">
        <div class="video_wrapper">
            <video :src="videoSrc" controls autoplay loop></video>
        </div>
        <About/>
    </div>
</template>

<script setup>
// FactoryEquipment
import About from '@/components/About.vue';
import videoSrc from '@/assets/video/factory.mp4';

</script>

<style lang="scss" scoped>
.factory_equipment_page {
    .video_wrapper {
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fafafa;
        video {
            width: 1000px;
            margin: 50px;
        }
    }
}
</style>