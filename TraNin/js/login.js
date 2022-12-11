const notice1 = document.querySelector('.check1')
    const notice2 = document.querySelector('.check2')
    const id = document.querySelector('#id_sh');
    const passwd = document.querySelector('#password_sh');
    
    let form = document.member_insert;
    let id_sh = form.memberId.value;
    let passwd_sh = form.password.value;
    
    let regExpId = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i; // 4~12
    
    let regExpPasswd = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/; //6~12
    
    
    id.addEventListener('input', function(){
        let id_sh = form.memberId.value;
        if(id_sh == ""){
            notice1.innerText = "";
        }
        if(!regExpId.test(id_sh)){
            notice1.innerText = "아이디는 이메일 형식으로 적어주십시요";
        }else{
            notice1.innerText = "";
        }
        
    })
    
    passwd.addEventListener('input', function(){
        let passwd_sh = form.password.value;
        if(passwd_sh == ""){
            notice2.innerText = "";
            }
        if(!regExpPasswd.test(passwd_sh)){
            notice2.innerText = "비밀번호는 특시기호, 영문 대문자, 숫자를 포함한 8글자 입니다.";
        }else{
            notice2.innerText = "";
        }
        
    })

const submit1 = document.querySelector('#submit')

$('form').submit(function(e){
    e.preventDefault();

    let form = document.member_insert;
    let id_sh = form.memberId.value;
    let passwd_sh = form.password.value;

    if(id_sh == ""){
        notice1.innerText = "아이디를 입력해주십시요";
        id.focus();
        return false;
    }
    if(!regExpId.test(id_sh)){
        notice1.innerText = "아이디는 이메일 형식으로 적어주십시요";
        id.focus();
        return false;
    }
    if(passwd_sh == ""){
        notice2.innerText = "비밀번호를 입력해주십시요";
        passwd.focus();
        return false;
        }
    if(!regExpPasswd.test(passwd_sh)){
        notice2.innerText = "비밀번호는 특시기호, 영문 대문자, 숫자를 포함한 8글자 입니다.";
        passwd.focus();
        return false;

    }

    $(this).unbind('submit').submit();
})

