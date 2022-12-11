const notice = document.querySelector('#check_sh')
const id = document.querySelector('#id_sh');
const passwd = document.querySelector('#password_sh');

let form = document.member_insert;
let id_sh = form.memberId.value;
let passwd_sh = form.password.value;

let regExpId = /^[a-z|A-Z]+[a-z|A-Z|0-9]*$/; // 4~12

let regExpPasswd = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //6~12


id.addEventListener('input', function(){
    let id_sh = form.memberId.value;
    if(id_sh == ""){
    notice.innerText = "";
    }
    if(!regExpId.test(id_sh)){
        notice.innerText = "유효한 아이디가 아닙니다.";
    }else{
        notice.innerText = "";
    }
    
})

passwd.addEventListener('input', function(){
    let passwd_sh = form.password.value;
    if(passwd_sh == ""){
        notice.innerText = "";
        }
    if(!regExpPasswd.test(passwd_sh)){
        notice.innerText = "유효한 비밀번호가 아닙니다..";
    }else{
        notice.innerText = "";
    }
    
})

