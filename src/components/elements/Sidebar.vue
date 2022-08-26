<script lang="ts" setup>
    import { ref } from "vue";
    
    const itemsGeneral = ref(["Colori", "Body", "Font"]);
    const itemsLayout = ref(["Container", "Grid", "Flex"]);
    const itemsForms = ref(["Input", "Checks & radios", "Select", "Textarea"]);
    const itemsComponents = ref(["Button", "Card", "Tooltip", "Spinner"]);
</script>

<template>
    <div class="sidebar c-flex flex-column align-items-start gap-s">
        <div class="section-menu c-flex flex-column gap-xxs">
            <span class="first-title black-primary text-16p weight-600">General</span>
            <div class="content-second-title c-flex flex-column gap-xxs">
                <router-link v-for="(value, index) in itemsGeneral" :key="index" :to="{name: value}" class="second-title btn-link text-14p weight-500">{{value}} </router-link>
            </div>
        </div>

        <div class="section-menu c-flex flex-column gap-xxs">
            <span class="first-title black-primary text-16p weight-600">Layout</span>
            <div class="content-second-title c-flex flex-column gap-xxs">
                <button v-for="(value, index) in itemsLayout" :key="index" class="second-title btn-link text-14p weight-500">{{value}}</button>
            </div>
        </div>

        <div class="section-menu c-flex flex-column gap-xxs">
            <span class="first-title black-primary text-16p weight-600">Forms</span>
            <div class="content-second-title c-flex flex-column gap-xxs">
                <button v-for="(value, index) in itemsForms" :key="index" class="second-title btn-link text-14p weight-500">{{value}}</button>
            </div>
        </div>

        <div class="section-menu c-flex flex-column gap-xxs">
            <span class="first-title black-primary text-16p weight-600">Components</span>
            <div class="content-second-title c-flex flex-column gap-xxs">
                <button v-for="(value, index) in itemsComponents" :key="index" class="second-title btn-link text-14p weight-500">{{value}}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .sidebar {
        position: sticky;
        height: calc(100vh - 6rem);
        overflow-y: auto;
    }

    .content-second-title {
        padding-left: 1rem;
    }

    .second-title {
        text-align: left;
        color: var(--black-tertiary);
    }
</style>