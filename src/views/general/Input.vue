<script lang="ts" setup>

</script>

<template>
    <div class="flex f-column gap-m">
        <div class="flex f-row gap-m">
            <div class="flex f-column gap-s">
                <!-- <span class="text-xs">Testo di prova</span> -->
                <input class="input-default" type="text" placeholder="Testo di prova">
    
                <div class="input-column">
                    <label for="">Label di prova</label>
                    <input type="text" placeholder="Testo di prova">
                </div>
            </div>
    
            <div class="flex f-column gap-s">
                    <div class="cnt-floating-label outside">
                        <input type="text" placeholder=" ">
                        <label>Label di prova</label>
                    </div>
                    <div class="cnt-floating-label outside">
                        <textarea type="text" placeholder=" "></textarea>
                        <label>Label di prova</label>
                    </div>
                    <div class="cnt-floating-label outside">
                        <select type="text">
                            <option value="1">Testo di prova</option>
                            <option value="2">Testo di prova</option>
                            <option value="3">Testo di prova</option>
                        </select>
                        <label>Label di prova</label>
                    </div>
            </div>
    
            <div class="flex f-column gap-s">
                <div class="cnt-floating-label inside">
                    <input type="text" placeholder=" ">
                    <label>Label di prova</label>
                </div>
                <div class="cnt-floating-label inside">
                    <textarea type="text" placeholder=" "></textarea>
                    <label>Label di prova</label>
                </div>
                <div class="cnt-floating-label inside">
                    <select type="text">
                        <option value="1">Testo di prova</option>
                        <option value="2">Testo di prova</option>
                        <option value="3">Testo di prova</option>
                    </select>
                    <label>Label di prova</label>
                </div>
            </div>
    
            <div class="flex f-column gap-s">
                <div class="cnt-floating-label line-bottom">
                    <input type="text" placeholder=" ">
                    <label>Label di prova</label>
                </div>
                <div class="cnt-floating-label line-bottom">
                    <textarea type="text" placeholder=" "></textarea>
                    <label>Label di prova</label>
                </div>
                <div class="cnt-floating-label line-bottom">
                    <select type="text">
                        <option value="1">Testo di prova</option>
                        <option value="2">Testo di prova</option>
                        <option value="3">Testo di prova</option>
                    </select>
                    <label>Label di prova</label>
                </div>
            </div>
    
            <div class="flex f-column gap-s">
                <label for="2" class="check-row">
                    <input class="checkbox" id="2" type="checkbox">
                    <span >Label di prova</span>
                </label>
                <label for="3" class="check-row hover">
                    <input class="checkbox" id="3" type="checkbox">
                    <span >Label di prova</span>
                </label>
            </div>
            <div class="flex f-column gap-s">
                <label for="5" class="check-row">
                    <input class="radio" id="5" type="radio">
                    <span >Label di prova</span>
                </label>
                <label for="6" class="check-row hover">
                    <input class="radio" id="6" type="radio">
                    <span >Label di prova</span>
                </label>
            </div>
    
        </div>
        <div class="switch-row">
            <label for="7" class="switch">
                <input id="7" type="checkbox">
                <span class="slider"></span>
            </label>
            <span>Attesa conferma per spedire camion</span>
        </div>

        <table class="table-default">
            <tr>
                <th>Testo di prova</th>
                <th>Testo di prova</th>
                <th>Testo di prova</th>
                <th>Testo di prova</th>
            </tr>
            <tr v-for="i in 10" :key="i">
                <td>Testo di prova</td>
                <td>Testo di prova</td>
                <td>Testo di prova</td>
                <td>
                    <button>Ciao</button>
                    <button>Ciao</button>
                    <button>Ciao</button>
                </td>
            </tr>

        </table>
    </div>
</template>

<style setup>

</style>