const myPageProfileNickName = document.querySelector("#myPageProfileNickName");
const myPageProfileIntroduce = document.querySelector("#myPageProfileIntroduce");
myPageProfileNickName.addEventListener('focusout',function(){
  //ajax myPageProfileNickName 바꾸기
  console.log("ajax focusout1");
});
myPageProfileIntroduce.addEventListener('focusout',function(){
  //ajax myPageProfileIntroduce 바꾸기
  console.log("ajax focusout2");
});
