<template>
    <div :style="{width:'100%', height:'auto', backgroundColor: bgColor}">
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    bgColor: String
});
const bgColor = computed(() => props.bgColor || '#fff');
</script>