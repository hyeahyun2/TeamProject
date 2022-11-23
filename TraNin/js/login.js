const id_sh = document.querySelector('#id_sh');
const password_sh = document.querySelector('#password_sh');

let form = document.member_insert;
let id_value = form.id_sh.value;
let password_value = form.password_sh.value;

let regExpId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

