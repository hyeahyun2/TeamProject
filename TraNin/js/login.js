const id_sh = document.querySelector('#id_sh');
const password_sh = document.querySelector('#password_sh');

let form = document.member_insert;
let id_value = form.id_sh.value;
let password_value = form.password_sh.value;

let regExpId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

id_sh.addEventListener('input', function(){
    let id_sh = form.memberID.value;
    if(id_sh == ""){
    notice.innerText = "";
    notice2.innerText = "";
    }
    if(!regExpId.test(id_sh)){
        notice.innerText = "아이디는 숫자와 영어 대/소문자만 가능하며 첫글자는 문자만 가능합니다.";
    }else{
        notice.innerText = "";
    if((id_sh.length < 4 || id_sh.length >12)){
        notice.innerText = "아이디는 4자리 이상, 12자리 이하만 가능합니다.";
    }else{
        notice.innerText = "";
    }
    }
    
})