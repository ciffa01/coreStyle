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
            <div class="item-color-theme bg-black-900">900</div>
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
            <div class="item-color-theme bg-blue-900">900</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-red-100">100</div>
            <div class="item-color-theme bg-red-200">200</div>
            <div class="item-color-theme bg-red-300">300</div>
            <div class="item-color-theme bg-red-400">400</div>
            <div class="item-color-theme bg-red-500">500</div>
            <div class="item-color-theme bg-red-600">600</div>
            <div class="item-color-theme bg-red-700">700</div>
            <div class="item-color-theme bg-red-800">800</div>
            <div class="item-color-theme bg-red-900">900</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-green-100">100</div>
            <div class="item-color-theme bg-green-200">200</div>
            <div class="item-color-theme bg-green-300">300</div>
            <div class="item-color-theme bg-green-400">400</div>
            <div class="item-color-theme bg-green-500">500</div>
            <div class="item-color-theme bg-green-600">600</div>
            <div class="item-color-theme bg-green-700">700</div>
            <div class="item-color-theme bg-green-800">800</div>
            <div class="item-color-theme bg-green-900">900</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-yellow-100">100</div>
            <div class="item-color-theme bg-yellow-200">200</div>
            <div class="item-color-theme bg-yellow-300">300</div>
            <div class="item-color-theme bg-yellow-400">400</div>
            <div class="item-color-theme bg-yellow-500">500</div>
            <div class="item-color-theme bg-yellow-600">600</div>
            <div class="item-color-theme bg-yellow-700">700</div>
            <div class="item-color-theme bg-yellow-800">800</div>
            <div class="item-color-theme bg-yellow-900">900</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-lightblue-100">100</div>
            <div class="item-color-theme bg-lightblue-200">200</div>
            <div class="item-color-theme bg-lightblue-300">300</div>
            <div class="item-color-theme bg-lightblue-400">400</div>
            <div class="item-color-theme bg-lightblue-500">500</div>
            <div class="item-color-theme bg-lightblue-600">600</div>
            <div class="item-color-theme bg-lightblue-700">700</div>
            <div class="item-color-theme bg-lightblue-800">800</div>
            <div class="item-color-theme bg-lightblue-900">900</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme bg-orange-100">100</div>
            <div class="item-color-theme bg-orange-200">200</div>
            <div class="item-color-theme bg-orange-300">300</div>
            <div class="item-color-theme bg-orange-400">400</div>
            <div class="item-color-theme bg-orange-500">500</div>
            <div class="item-color-theme bg-orange-600">600</div>
            <div class="item-color-theme bg-orange-700">700</div>
            <div class="item-color-theme bg-orange-800">800</div>
            <div class="item-color-theme bg-orange-900">900</div>
        </div>

        <div class="container-color-theme flex f-column">
            <div class="item-color-theme blac-primary">primary</div>
            <div class="item-color-theme blue-primary">primary</div>
            <div class="item-color-theme red-primary">primary</div>
            <div class="item-color-theme green-primary">primary</div>
            <div class="item-color-theme yellow-primary">primary</div>
            <div class="item-color-theme lightblue-primary">primary</div>
            <div class="item-color-theme orange-primary">primary</div>

        </div>
    </div>

        
</template>

<style setup lang="scss">

    .item-color-theme {
        padding: 1.2rem 3rem;
        color: #fff;
        border-radius: 5px;
        width: 80px;
        text-align: center;
    }

    
</style>

