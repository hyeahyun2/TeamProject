// 우편번호 검색
const form = document.member_insert;
const dblCheck3 = form.dblCheck3;

dblCheck3.addEventListener('click', function(){
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var fullAddr = ''; // 최종 주소 변수
            var extraAddr = ''; // 조합형 주소 변수

            // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                fullAddr = data.roadAddress;
            }
            else { // 사용자가 지번 주소를 선택했을 경우(J)
                fullAddr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
            if(data.userSelectedType === 'R'){
                //법정동명이 있을 경우 추가한다.
                if(data.bname !== ''){
                    extraAddr += data.bname;
                }
                // 건물명이 있을 경우 추가한다.
                if(data.buildingName !== ''){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('zipcode').value = data.zonecode; //5자리 새우편번호 사용
            document.getElementById('address01').value = fullAddr;

            // 커서를 상세주소 필드로 이동한다.
            document.getElementById('address02').focus();
        }
    }).open();
});

// 성별 선택
const sexMan = document.getElementById("man");
const manInput = sexMan.querySelector("input");
const sexWoman = document.getElementById("woman");
const womanInput = sexWoman.querySelector("input");

sexWoman.addEventListener("click", (e)=>{ // 여자 선택
	manInput.removeAttribute("checked");
	womanInput.setAttribute("checked", "checked");
	e.currentTarget.style.backgroundColor = "rgb(238, 123, 142)";
	sexMan.style.backgroundColor = "rgb(214, 245, 255)";
})
sexMan.addEventListener("click", (e)=>{ // 남자 선택
	womanInput.removeAttribute("checked");
	manInput.setAttribute("checked", "checked");
	e.currentTarget.style.backgroundColor = "rgb(128, 199, 223)";
	sexWoman.style.backgroundColor = "rgb(255, 224, 229)";
})


// 2. 유효성 검사.
const notice = document.querySelector('#check_sh')
const id = document.querySelector('#id_sh');
const password = document.querySelector('#password_sh');
const password_cf = document.querySelector('#password_cf');
const name = document.querySelector('#name');
const nickName = document.querySelector('#nickName');



let id_sh = form.memberId.value;
let password_sh = form.password.value;
let password_cf_sh = form.password_cf.value;
let name_sh = form.name.value;
let nickName_sh = form.nickName.value;



let regExpId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; // 4~12

let regExpName = /^[가-힣]*$/; // 2~4

let regExpNickName = /^[가-힣]*$/; // 2~4

let regExppassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //6~12


id.addEventListener('input', function () {
    let id_sh = form.memberId.value;
    if (id_sh == "") {
        notice.innerText = "";
    }
    if (!regExpId.test(id_sh)) {
        notice.innerText = "유효한 아이디가 아닙니다.";
    } else {
        notice.innerText = "";
    }

})

password.addEventListener('input', function () {
    let passwd_sh = form.password.value;
    if (passwd_sh == "") {
        notice.innerText = "";
    }
    if (!regExppassword.test(passwd_sh)) {
        notice.innerText = "유효한 비밀번호가 아닙니다..";
    } else {
        notice.innerText = "";
    }

})

password_cf.addEventListener('keyup', function () {
    let password_sh = form.password.value;
    let password_cf_sh = form.password_cf.value;
    if (password_sh == password_cf_sh) {
        notice.innerText = "비밀번호가 일치합니다!";
    } else {
        notice.innerText = "비밀번호가 일치하지 않습니다!";
    }
})

name.addEventListener('input', function () {
    let name_sh = form.name.value;
    if (name_sh == "") {
        notice.innerText = "";
    }
    if (!regExpName.test(name_sh)) {
        notice.innerText = "이름은 한글로만 지정 가능합니다.";
    } else {
        notice.innerText = ""
        if ((name_sh.length < 2 || name_sh.length > 20)) {
            notice.innerText = "이름은 2자리 이상, 4자리 이하만 가능합니다.";
        } else {
            notice.innerText = "";
        }
    }

})
nickName.addEventListener('input', function () {
    let nickName_sh = form.name.value;
    if (nickName_sh == "") {
        notice.innerText = "";
    }
    if (!regExpName.test(nickName_sh)) {
        notice.innerText = "별명은 한글로만 지정 가능합니다.";
    } else {
        notice.innerText = ""
        if ((nickName_sh.length < 2 || nickName_sh.length > 20)) {
            notice.innerText = "별명은 2자리 이상, 4자리 이하만 가능합니다.";
        } else {
            notice.innerText = "";
        }
    }

})

// 1.필수 항목 검사.
function checkForm(e) {
    e.preventDefault();

    if (id_sh === "") {
        alert("아이디를 입력해 주세요!")
        form.memberId.focus();
        return false;
    } else if (password_sh === "") {
        alert("비밀번호를 입력해 주세요!")
        form.password.focus();
        return false;
    } else if (password_cf_sh === "") {
        alert("비밀번호 확인을 진행해 주세요!")
        form.password_cf.focus();
        return false;
    } else if (name_sh === "") {
        alert("이름을 입력해 주세요!")
        form.name.focus();
        return false;
    } else if (nickName === "") {
        alert("별명을 입력해 주세요!")
        form.nickName.focus();
        return false;
    } else if (!regExpId.test(id_sh) || (id_sh.length < 4 || id_sh.length > 30)) {
        alert("아이디가 유효하지 않습니다.")
        form.memberId.focus();
        return false;
    } else if (!regExppassword.test(password_sh) || (password_sh.length < 8 || password_sh.length > 20)) {
        alert("비밀번호가 유효하지 않습니다.")
        form.password.focus();
        return false;
    } else if (password_sh != password_cf_sh) {
        alert("비밀번호가 일치하지 않습니다!")
        form.password.focus();
        return false;
    } else if (!regExpName.test(name_sh) || (name_sh.length < 2 || name_sh.length > 20)) {
        alert("이름이 유효하지 않습니다.")
        form.name.focus();
        return false;
    }
    form.submit();
}

const dblCheck4 = form.dblCheck4;

dblCheck4.addEventListener("click", checkForm)
