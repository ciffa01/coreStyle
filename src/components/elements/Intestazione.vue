<script lang="ts" setup>
    const props = defineProps(['title', 'description']); 
</script>

<template>
    <div class="container-color-theme c-flex flex-column gap-xxs">
        <span class="title-element"> {{ props.title }} </span>
        <span class="description-element"> {{ props.description }} </span>
    </div>
</template>

<script>
</script>