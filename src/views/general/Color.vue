<script lang="ts" setup>
    import Intestazione from "@/components/elements/Intestazione.vue"
    import { ref } from "vue";
    const isActive = ref(false);
</script>

<template>
    <div class="flex f-row f-wrap gap-s">
        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-black-100">100</div>
            <div class="item-color-theme bg-black-200">200</div>
            <div class="item-color-theme bg-black-300">300</div>
            <div class="item-color-theme bg-black-400">400</div>
            <div class="item-color-theme bg-black-500">500</div>
            <div class="item-color-theme bg-black-600">600</div>
            <div class="item-color-theme bg-black-700">700</div>
            <div class="item-color-theme bg-black-800">800</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-gray-100">100</div>
            <div class="item-color-theme bg-gray-200">200</div>
            <div class="item-color-theme bg-gray-300">300</div>
            <div class="item-color-theme bg-gray-400">400</div>
            <div class="item-color-theme bg-gray-500">500</div>
            <div class="item-color-theme bg-gray-600">600</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-blue-100">100</div>
            <div class="item-color-theme bg-blue-200">200</div>
            <div class="item-color-theme bg-blue-300">300</div>
            <div class="item-color-theme bg-blue-400">400</div>
            <div class="item-color-theme bg-blue-500">500</div>
            <div class="item-color-theme bg-blue-600">600</div>
            <div class="item-color-theme bg-blue-700">700</div>
            <div class="item-color-theme bg-blue-800">800</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-red-100">100</div>
            <div class="item-color-theme bg-red-200">200</div>
            <div class="item-color-theme bg-red-300">300</div>
            <div class="item-color-theme bg-red-400">400</div>
            <div class="item-color-theme bg-red-500">500</div>
            <div class="item-color-theme bg-red-600">600</div>
            <div class="item-color-theme bg-red-700">700</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-green-100">100</div>
            <div class="item-color-theme bg-green-200">200</div>
            <div class="item-color-theme bg-green-300">300</div>
            <div class="item-color-theme bg-green-400">400</div>
            <div class="item-color-theme bg-green-500">500</div>
            <div class="item-color-theme bg-green-600">600</div>
            <div class="item-color-theme bg-green-700">700</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-yellow-100">100</div>
            <div class="item-color-theme bg-yellow-200">200</div>
            <div class="item-color-theme bg-yellow-300">300</div>
            <div class="item-color-theme bg-yellow-400">400</div>
            <div class="item-color-theme bg-yellow-500">500</div>
            <div class="item-color-theme bg-yellow-600">600</div>
            <div class="item-color-theme bg-yellow-700">700</div>
        </div>


        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-dangerous">primary</div>
            <div class="item-color-theme bg-success">primary</div>
            <div class="item-color-theme bg-info">primary</div>
            <div class="item-color-theme bg-warning">primary</div>
        </div>
    </div>

        
</template>

<style setup lang="scss">

    .container-color-theme {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .item-color-theme {
        padding: 1.2rem 3rem;
        color: #fff;
        width: 80px;
        text-align: center;
        box-shadow: 0px 0px 2px 1px #dcdcdc;
    }

    
</style>

