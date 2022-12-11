const myPageProfileNickName = document.querySelector("#myPageProfileNickName");
const myPageProfileIntroduce = document.querySelector("#myPageProfileIntroduce");
const myPageProfilePicture = document.querySelector("#myPageProfilePicture");
const myPageProfileAttach = document.querySelector("#myPageProfileAttach");
const myPageMyActivityLeftNav = document.querySelector("#myPageMyActivityLeftNav");
const myPageMyActivityLeftNavLi = document.querySelectorAll("#myPageMyActivityLeftNav li");
const myPageTab = document.querySelectorAll("#myPageTab li");
const myPageFavoriteUl = document.querySelector("#myPageFavorite ul");
const myPageMemberOutBtn = document.querySelector("#myPageMemberOutBtn");
const myPageMemberBannedListBtns = document.querySelectorAll("#myPageMemberBannedList input");
const myPageAdminInnerTab = document.querySelectorAll("#myPageAdminInnerTab section");
const myPageAdminNav = document.querySelectorAll("#myPageAdminNav ul li");

myPageProfileNickName.addEventListener('focusout',function(){
  //ajax myPageProfileNickName 바꾸기
  console.log("ajax focusout1");
});
myPageProfileIntroduce.addEventListener('focusout',function(){
  //ajax myPageProfileIntroduce 바꾸기
  console.log("ajax focusout2");
});
myPageProfileAttach.addEventListener('change',function(){
  //ajax 프로필 사진 change시 서버에 이미지 파일 추가 및 데이터베이스url추가
  console.log("ajax change picture");
});
for(let i=0;i<myPageTab.length;i++){
  console.log(i);
  myPageTab[i].addEventListener('click',function(){
    for(let j=0;j<myPageTab.length;j++){
      myPageTab[j].classList.remove("active");
    }
    myPageTab[i].classList.add("active");
  });
}
for(let i=0;i<myPageMyActivityLeftNavLi.length;i++){
  console.log(i);
  myPageMyActivityLeftNavLi[i].addEventListener('click',function(){
    for(let j=0;j<myPageMyActivityLeftNavLi.length;j++){
      myPageMyActivityLeftNavLi[j].classList.remove("enabled");
    }
    myPageMyActivityLeftNavLi[i].classList.add("enabled");
  });
}
myPageFavoriteUl.addEventListener('scroll',function(){
  if( myPageFavoriteUl.scrollTop === (myPageFavoriteUl.scrollHeight - myPageFavoriteUl.offsetHeight)){
    console.log(myPageFavoriteUl.scrollTop+"ajax 발동");
    let li = document.createElement("li")
    myPageFavoriteUl.append(li);
  }
});
myPageMemberOutBtn.addEventListener('click',function(){
  let isExecuted = confirm("정말 탈퇴하시겠습니까?");
  if(isExecuted==true){
    console.log("탈퇴 url로 보내기");
    console.log("그 후 메인화면으로 튕구기");
  } else {
    console.log("아무일없었다");
  }
});
//밴리스트 차단버튼 클릭시
for(let i=0;i<myPageMemberBannedListBtns.length;i++){
  myPageMemberBannedListBtns[i].addEventListener('click',function(e){
    let isExecuted = confirm("정말 차단 해제하시겠습니까?");
    console.log(isExecuted+" / "+e.target.value);//선택은?
  });
}
//관리자 페이지 탭
for(let i=0;i<myPageAdminNav.length;i++){
  console.log(i);
  myPageAdminNav[i].addEventListener('click',function(){
    for(let j=0;j<myPageAdminNav.length;j++){
      myPageAdminNav[j].classList.remove("active");
    }
    myPageAdminNav[i].classList.add("active");

    for(let j=0;j<myPageAdminInnerTab.length;j++){
      myPageAdminInnerTab[j].classList.remove("active");
    }
    myPageAdminInnerTab[i].classList.add("active");
  });
}
