<script lang="ts" setup>
    import Intestazione from "@/components/elements/Intestazione.vue"
    import { ref } from "vue";
    const isActive = ref(false);
</script>

<template>
    <div class="flex f-row f-wrap gap-s">
        <!-- <div class="item-color-theme bg-black-70">10</div>
        <div class="item-color-theme bg-black-70">20</div>  -->

        
        <!-- <div class="container-color-theme c-flex flex-column  gap-0_3">
            <div class="item-color-theme bg-black-10">10</div>
            <div class="item-color-theme bg-black-20">20</div>
            <div class="item-color-theme bg-black-30">30</div>
            <div class="item-color-theme bg-black-40">40</div>
            <div class="item-color-theme bg-black-50">50</div>
            <div class="item-color-theme bg-black-60">60</div>
            <div class="item-color-theme bg-black-70">70</div>
            <div class="item-color-theme bg-black-80">80</div>
            <div class="item-color-theme bg-black-90">90</div>
        </div>

        <div class="container-color-theme c-flex flex-column  gap-0_3">
            <div class="item-color-theme bg-blue-10">10</div>
            <div class="item-color-theme bg-blue-20">20</div>
            <div class="item-color-theme bg-blue-30">30</div>
            <div class="item-color-theme bg-blue-40">40</div>
            <div class="item-color-theme bg-blue-50">50</div>
            <div class="item-color-theme bg-blue-60">60</div>
            <div class="item-color-theme bg-blue-70">70</div>
            <div class="item-color-theme bg-blue-80">80</div>
            <div class="item-color-theme bg-blue-90">90</div>
        </div>

        <div class="container-color-theme c-flex flex-column  gap-0_3">
            <div class="item-color-theme bg-red-10">10</div>
            <div class="item-color-theme bg-red-20">20</div>
            <div class="item-color-theme bg-red-30">30</div>
            <div class="item-color-theme bg-red-40">40</div>
            <div class="item-color-theme bg-red-50">50</div>
            <div class="item-color-theme bg-red-60">60</div>
            <div class="item-color-theme bg-red-70">70</div>
            <div class="item-color-theme bg-red-80">80</div>
            <div class="item-color-theme bg-red-90">90</div>
        </div>

        <div class="container-color-theme c-flex flex-column  gap-0_3">
            <div class="item-color-theme bg-green-10">10</div>
            <div class="item-color-theme bg-green-20">20</div>
            <div class="item-color-theme bg-green-30">30</div>
            <div class="item-color-theme bg-green-40">40</div>
            <div class="item-color-theme bg-green-50">50</div>
            <div class="item-color-theme bg-green-60">60</div>
            <div class="item-color-theme bg-green-70">70</div>
            <div class="item-color-theme bg-green-80">80</div>
            <div class="item-color-theme bg-green-90">90</div>
        </div>

        <div class="container-color-theme c-flex flex-column  gap-0_3">
            <div class="item-color-theme bg-yellow-10">10</div>
            <div class="item-color-theme bg-yellow-20">20</div>
            <div class="item-color-theme bg-yellow-30">30</div>
            <div class="item-color-theme bg-yellow-40">40</div>
            <div class="item-color-theme bg-yellow-50">50</div>
            <div class="item-color-theme bg-yellow-60">60</div>
            <div class="item-color-theme bg-yellow-70">70</div>
            <div class="item-color-theme bg-yellow-80">80</div>
            <div class="item-color-theme bg-yellow-90">90</div>
        </div>

        <div class="container-color-theme c-flex flex-column  gap-0_3">
            <div class="item-color-theme bg-lightblue-10">10</div>
            <div class="item-color-theme bg-lightblue-20">20</div>
            <div class="item-color-theme bg-lightblue-30">30</div>
            <div class="item-color-theme bg-lightblue-40">40</div>
            <div class="item-color-theme bg-lightblue-50">50</div>
            <div class="item-color-theme bg-lightblue-60">60</div>
            <div class="item-color-theme bg-lightblue-70">70</div>
            <div class="item-color-theme bg-lightblue-80">80</div>
            <div class="item-color-theme bg-lightblue-90">90</div>
        </div>

        <div class="container-color-theme c-flex flex-column  gap-0_3">
            <div class="item-color-theme bg-orange-10">10</div>
            <div class="item-color-theme bg-orange-20">20</div>
            <div class="item-color-theme bg-orange-30">30</div>
            <div class="item-color-theme bg-orange-40">40</div>
            <div class="item-color-theme bg-orange-50">50</div>
            <div class="item-color-theme bg-orange-60">60</div>
            <div class="item-color-theme bg-orange-70">70</div>
            <div class="item-color-theme bg-orange-80">80</div>
            <div class="item-color-theme bg-orange-90">90</div>
        </div>

        <div class="container-color-theme c-flex flex-column  gap-0_3">
            <div class="item-color-theme blac-primary">primary</div>
            <div class="item-color-theme blue-primary">primary</div>
            <div class="item-color-theme red-primary">primary</div>
            <div class="item-color-theme green-primary">primary</div>
            <div class="item-color-theme yellow-primary">primary</div>
            <div class="item-color-theme lightblue-primary">primary</div>
            <div class="item-color-theme orange-primary">primary</div>

        </div> -->

        <!-- <div class="container-color-theme flex f-row gap-xl">
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
        </div> -->

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

    </div>
</template>

<style setup lang="scss">

    .item-color-theme {
        padding: 1.2rem 3rem;
        color: #fff;
        border-radius: 5px;
        width: 100%;
        text-align: center;
    }

    
</style>

