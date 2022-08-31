<script>

</script>
<template>
    <div class="flex f-row-s f-wrap-l gap-l">

        <div class="card flex f-column gap-xs cnt-s">
            <span class="text-m weight-500">Prova</span>
            <div class="flex f-row-xs gap-s f-align-end">
                <div class="cnt-floating-label width-100">
                    <input type="text" class="floating-input-100" placeholder="Nome">
                    <label class="floating-label-100">Nome</label>
                </div>
                <div class="cnt-floating-label width-100">
                    <input type="text" class="floating-input-100" placeholder=" ">
                    <label class="floating-label-100">Cognome</label>
                </div>

            </div>
    
            <div class="flex f-row-xs gap-s">
                <div class="cnt-floating-label width-100">
                    <select class="floating-select-100" value onclick="this.setAttribute('value', this.value);" >
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                    <label class="floating-label-100">Prova</label>
                </div>
        
                <div class="cnt-floating-label width-100">
                    <input type="text" class="floating-input-100" placeholder="Ciao">
                    <label class="floating-label-100">Prova 3</label>
                </div>
            </div>

            <div class="flex f-row-xs gap-s">
                <div class="cnt-floating-label width-100">
                    <textarea type="text" class="floating-textarea-100" placeholder=" "></textarea>
                    <label class="floating-label-100">Prova 3</label>
                </div>
            </div>
    
            <div class="flex f-row gap-xs mg-t-s">
                <button class="btn-default btn-blue-secondary">Salva</button>
                <button class="btn-default btn-red-secondary">Annulla</button>
            </div>
        </div>

        <div class="card flex f-column gap-s cnt-s">
            <span class="text-m weight-500">Prova</span>
            <div class="flex f-row-xs gap-s">
                <div class="cnt-floating-label">
                    <input type="text" class="floating-input" placeholder="Nome">
                    <label class="floating-label">Nome</label>
                </div>
        
                <div class="cnt-floating-label">
                    <input type="text" class="floating-input" placeholder="Cognome">
                    <label class="floating-label">Cognome</label>
                </div>
            </div>
    
            <div class="flex f-row-xs gap-s">
                <div class="cnt-floating-label width-100">
                    <select class="floating-select" name="ciao" onclick="this.setAttribute('value', this.value)" value="">
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                    <label class="floating-label">Prova</label>
                </div>
    
                <div class="cnt-floating-label width-100">
                    <input type="text" class="floating-input" placeholder="Ciao">
                    <label class="floating-label">Prova 3</label>
                </div>
            </div>

            <div class="flex f-row-xs gap-s">
                <div class="cnt-floating-label width-100">
                    <textarea type="text" class="floating-textarea" placeholder=" "></textarea>
                    <label class="floating-label">Prova 3</label>
                </div>
            </div>
    
            <div class="flex f-row gap-xs mg-t-s">
                <button class="btn-default btn-blue-secondary">Salva</button>
                <button class="btn-default btn-red-secondary">Annulla</button>
            </div>
        </div>

        <div class="card flex f-column gap-xs cnt-s">
            <span class="text-m weight-500">Prova</span>
            <div class="flex f-row-xs gap-s">
                <div class="cnt-floating-label">
                    <input type="text" class="floating-input-bottom" placeholder="Nome">
                    <label class="floating-label-bottom">Nome</label>
                </div>
        
                <div class="cnt-floating-label">
                    <input type="text" class="floating-input-bottom" placeholder="Cognome">
                    <label class="floating-label-bottom">Cognome</label>
                </div>
            </div>
    
            <div class="flex f-row-xs gap-s">
                <div class="cnt-floating-label width-100">
                    <select class="floating-select-bottom" value onclick="this.setAttribute('value', this.value);" >
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                    <label class="floating-label-bottom">Prova</label>
                </div>
    
                <div class="cnt-floating-label width-100">
                    <input type="text" class="floating-input-bottom" placeholder="Ciao">
                    <label class="floating-label-bottom">Prova 3</label>
                </div>
            </div>

            <div class="flex f-row-xs gap-s">
                <div class="cnt-floating-label width-100">
                    <textarea class="floating-textarea-bottom" placeholder=" "></textarea>
                    <label class="floating-label-bottom">Prova 3</label>
                </div>
            </div>
    
            <div class="flex f-row gap-xs mg-t-s">
                <button class="btn-default btn-blue-secondary">Salva</button>
                <button class="btn-default btn-red-secondary">Annulla</button>
            </div>
        </div>

        <div class="card flex f-column gap-xs cnt-s">
            <span class="text-m weight-500">Prova</span>
            <div class="flex f-row-xs gap-s">
                <div class="cnt-element-form">
                    <label>Nome</label>
                    <input type="text" class="default-input" placeholder="Nome">
                </div>
        
                <div class="cnt-element-form">
                    <label>Cognome</label>
                    <input type="text" class="default-input" placeholder="Cognome">
                </div>
            </div>
    
            <div class="flex f-row-xs gap-s">
                <div class="cnt-element-form width-100">
                    <label>Prova</label>
                    <select class="default-input" value onclick="this.setAttribute('value', this.value);" >
                        <option value=""></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>

                <div class="cnt-element-form width-100">
                    <label>Prova 3</label>
                    <input type="text" class="default-input" placeholder="Ciao">
                </div>
            </div>

            <div class="flex f-row-xs gap-s">
                <div class="cnt-element-form width-100">
                    <label>Prova 4</label>
                    <textarea class="default-input" placeholder="Ciao"></textarea>
                </div>
            </div>
    
            <div class="flex f-row gap-xs mg-t-s">
                <button class="btn-default btn-blue-secondary">Salva</button>
                <button class="btn-default btn-red-secondary">Annulla</button>
            </div>
        </div>
    </div>

</template>


<style setup>

</style>

