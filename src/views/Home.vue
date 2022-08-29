<script lang="ts" setup>

</script>
<template>

    <div class="container-color-theme flex f-row gap-xl">
        <div class="flex f-column gap-s">
            <div class="cnt-floating-label">
                <input class="floating-input" type="text" placeholder=" ">
                <label class="floating-label">Prova</label>
            </div>

            <div class="cnt-floating-label">
                <select 
                    class="floating-select" 
                    onclick="this.setAttribute('value', this.value)" 
                    value="">
                    <option value=""></option>
                    <option value="2">ciao sono simone</option>
                    <option value="3">ciso sono mario rossi</option>
                </select>
                <label class="floating-label">Prova</label>
            </div>

            <div class="cnt-floating-label">
                <textarea class="floating-textarea" placeholder=" "></textarea>
                <label class="floating-label">Prova</label>
            </div>
        </div>

        <div class="flex f-column gap-s">
            <div class="cnt-floating-label">
                <input class="floating-input-100" type="text" placeholder="dadsa">
                <label class="floating-label-100">Prova</label>
            </div>

            <div class="cnt-floating-label">
                <select 
                    class="floating-select-100" 
                    onclick="this.setAttribute('value', this.value);" 
                    value="">
                    <option value=""></option>
                    <option value="2">ciao sono simone</option>
                    <option value="3">ciso sono mario rossi</option>
                </select>
                <label class="floating-label-100">Prova</label>
            </div>

            <div class="cnt-floating-label">
                <textarea class="floating-textarea-100" name="" id="" placeholder=" "></textarea>
                <label class="floating-label-100">Prova</label>
            </div>
        </div>

        <div class="flex f-column gap-s">
            <div class="cnt-floating-label">
                <input class="floating-input-bottom" type="text" placeholder="fdsfds ">
                <label class="floating-label-bottom">Prova</label>
            </div>

            <div class="cnt-floating-label">
                <select 
                    class="floating-select-bottom" 
                    onclick="this.setAttribute('value', this.value);" 
                    value="">
                    <option value=""></option>
                    <option value="2">ciao sono simone</option>
                    <option value="3">ciso sono mario rossi</option>
                </select>
                <label class="floating-label-bottom">Prova</label>
            </div>

            <div class="cnt-floating-label">
                <textarea class="floating-textarea-bottom" name="" id="" placeholder=" "></textarea>
                <label class="floating-label-bottom">Prova</label>
            </div>

            <input type="text" class="default-input">
        </div>
    </div>

    <div class="container-color-theme flex f-row gap-xs">
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        <span class="text-15p text-left">prova</span>
    </div>

    <div class="container-color-theme flex f-row gap-xs">
        <input type="checkbox">
        <span>prova</span>
    </div>

    <div class="container-color-theme flex f-row gap-xs">
        <input type="radio">
        <span>prova</span>
    </div>
</template>


<style setup>

</style>

