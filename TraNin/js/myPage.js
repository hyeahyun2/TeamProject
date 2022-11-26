const myPageProfileNickName = document.querySelector("#myPageProfileNickName");
const myPageProfileIntroduce = document.querySelector("#myPageProfileIntroduce");
const myPageProfilePicture = document.querySelector("#myPageProfilePicture");
const myPageProfileAttach = document.querySelector("#myPageProfileAttach");

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
