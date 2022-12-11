// 1.필수 항목 검사.

function checkForm(e) {
    e.preventDefault();
    let form = document.member_insert;
    let id_sh = form.memberId.value;
    let password_sh = form.password.value;
    let password_cf_sh = form.password_cf.value;
    let name_sh = form.name.value;
    let nickName = form.nickName.value;
   
    
    let regExpId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; // 4~12
    
    let regExpName = /^[가-힣]*$/; // 2~4

    let regExpNickName = /^[가-힣]*$/; // 2~4
    
    let regExppassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //6~12
    

    
    
        if(id_sh === ""){
            alert("아이디를 입력해 주세요!")
            form.memberId.focus();
            return false;
        }else if(password_sh ===""){
            alert("비밀번호를 입력해 주세요!")
            form.password.focus();
            return false;
        }else if(password_cf_sh ===""){
            alert("비밀번호 확인을 진행해 주세요!")
            form.password_cf.focus();
            return false;
        }else if(name_sh ===""){
            alert("이름을 입력해 주세요!")
            form.name.focus();
            return false;
        }else if(nickName ===""){
            alert("별명을 입력해 주세요!")
            form.nickName.focus();
            return false;
        }else if(!regExpId.test(id_sh) || (id_sh.length < 4 || id_sh.length >12)){
            alert("아이디가 유효하지 않습니다.")
            form.memberId.focus();
            return false;
        }else if(!regExppassword.test(password_sh) || (password_sh.length < 6 || password_sh.length >12)){
            alert("비밀번호가 유효하지 않습니다.")
            form.password.focus();
            return false;
        }else if(password_sh != password_cf_sh){
            alert("비밀번호가 일치하지 않습니다!")
            form.password.focus();
            return false;
        }else if(!regExpName.test(name_sh) || (name_sh.length < 2 || name_sh.length >4)){
            alert("이름이 유효하지 않습니다.")
            form.name.focus();
            return false;
        }
        form.submit();
    }
    
    // 2. 유효성 검사.
    const notice = document.querySelector('#check_sh')
    const id = document.querySelector('#id_sh');
    const password = document.querySelector('#password_sh');
    const password_cf = document.querySelector('#password_cf');
    const name = document.querySelector('#name');
    const nickName = document.querySelector('#nickName');
    

    
    let form = document.member_insert;
    let id_sh = form.memberId.value;
    let password_sh = form.password.value;
    let password_cf_sh = form.password_cf.value;
    let name_sh = form.name.value;
    let nickName_sh = form.nickName.value;


    
    let regExpId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; // 4~12
    
    let regExpName = /^[가-힣]*$/; // 2~4

    let regExpNickName = /^[가-힣]*$/; // 2~4
    
    let regExppassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //6~12
    
    
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

password.addEventListener('input', function(){
    let passwd_sh = form.password.value;
    if(passwd_sh == ""){
        notice.innerText = "";
        }
    if(!regExppassword.test(passwd_sh)){
        notice.innerText = "유효한 비밀번호가 아닙니다..";
    }else{
        notice.innerText = "";
    }
        
    })
    
    password_cf.addEventListener('keyup', function(){
        let password_sh = form.password.value;
        let password_cf_sh = form.password_cf.value;
        if(password_sh == password_cf_sh){
            notice.innerText = "비밀번호가 일치합니다!";
        } else {
            notice.innerText = "비밀번호가 일치하지 않습니다!";
        }
    })
    
    name.addEventListener('input', function(){
        let name_sh = form.name.value;
        if(name_sh == ""){
            notice.innerText = "";
            }
        if(!regExpName.test(name_sh)){
            notice.innerText = "이름은 한글로만 지정 가능합니다.";
        }else{
            notice.innerText = ""
        if((name_sh.length < 2 || name_sh.length >4)){
            notice.innerText = "이름은 2자리 이상, 4자리 이하만 가능합니다.";
        }else{
            notice.innerText = "";
        }
        }
        
    })
    nickName.addEventListener('input', function(){
        let nickName_sh = form.name.value;
        if(nickName_sh == ""){
            notice.innerText = "";
            }
        if(!regExpName.test(nickName_sh)){
            notice.innerText = "별명은 한글로만 지정 가능합니다.";
        }else{
            notice.innerText = ""
        if((nickName_sh.length < 2 || nickName_sh.length >4)){
            notice.innerText = "별명은 2자리 이상, 4자리 이하만 가능합니다.";
        }else{
            notice.innerText = "";
        }
        }
        
    })


    
    
    
    
    
    
    
    
    
    