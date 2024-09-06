'use strict';
function OpenModal() {
    const Open = document.getElementById('open');
    const Model = document.getElementById('modelw');
    Open.addEventListener('click', () => {
        Open.disabled = true;
        Model.style.display='block';
    })
}
function CloseModal() {
    const Close = document.getElementById('close');
    const Open = document.getElementById('open');    
    const Model = document.getElementById('modelw');
    Close.addEventListener('click', () => {
        Open.disabled = false;
        Model.style.display='none';
    })
}