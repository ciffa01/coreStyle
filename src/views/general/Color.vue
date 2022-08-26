<script lang="ts" setup>
    import Intestazione from "@/components/elements/Intestazione.vue"
    import { ref } from "vue";
    const isActive = ref(false);
</script>

<template>
    <div class="flex f-row f-wrap gap-s">
        <!-- <div class="item-color-theme bg-black-70">10</div>
        <div class="item-color-theme bg-black-70">20</div>  -->

        <div class="container-color-theme flex f-row gap-s">
            <form class="go-bottom">
                <div>
                    <input id="name" name="name" type="text" required>
                    <label for="name">Your Name</label>
                </div>
            </form>
        </div>
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
    </div>
</template>

<style setup lang="scss">

    .item-color-theme {
        padding: 1.2rem 3rem;
        color: #fff;
        border-radius: 5px;
        width: 130px;
        text-align: center;
    }

    form {
        > div {
            position: relative;
            overflow: hidden;
        }
        input {
            width: 100%;
            border: 2px solid gray; 
            background: none;
            position: relative;
            top: 0;
            left: 0;
            z-index: 1;
            padding: 8px 12px;
            outline: 0;

           /*  &:valid {
            // Hides the label
                background: white; 
            } */
            &:focus {
                border-color: #f06d06;
            }
            &:focus + label {
                background: #f06d06;
                color: white;
                font-size: 70%;
                padding: 1px 6px;
                z-index: 2;
                text-transform: uppercase;
            }
        }

        label {
            position: absolute;
            color: #999;
            padding: 7px 6px;
        }
   
    }

    form.go-bottom {
        input {
            padding: 12px 12px 12px 12px; 
        }

        label {
            top: 0;
            bottom: 0;
            left: 0;
            width: 100%;
        }

        input:focus {
            padding: 4px 6px 20px 6px; 
        }
        
        input:focus + label {
            top: 100%;
            margin-top: -16px;
        }
    }

</style>

