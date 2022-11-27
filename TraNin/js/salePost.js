const contentWrap = document.getElementById("contentWrap");
const imgWrap = contentWrap.querySelector(".mainImg");
const imgBtn = contentWrap.querySelector(".imgBtn");

const imgList = imgWrap.querySelectorAll("li");
const imgbtnList = imgBtn.querySelectorAll("li");

let imgNum = 0; // 현재 이미지의 index 번호
function imgMove(){
  imgWrap.style.transition = '0.5s';
  imgWrap.style.marginLeft = `-${imgNum * 100}%`;
  imgbtnList.forEach(element => {
    element.classList.remove("checkImg");
  });
  imgbtnList[imgNum].classList.add("checkImg");
  setTimeout(function(){
    imgWrap.style.transition = '0s';
  }, 600);
}
// 버튼 클릭시
imgbtnList.forEach((element, index) => {
  element.addEventListener("click", ()=>{
    imgNum = index;
    imgMove();
  })
})

// 드래그 이벤트
let mouseDown = 0;
let mouseUp = 0;
let mouseDrage = false; // 드래그 중에 true
imgWrap.addEventListener("mousedown", function(e){
  mouseDrage = true;
  mouseDown = e.pageX;
})
imgWrap.addEventListener("mouseup", function(e){
  mouseUp = e.pageX;
  console.log("down: " + mouseDown);
  console.log("up: " + mouseUp);
  if(mouseUp < mouseDown){ // 왼쪽으로 드래그
    console.log("left");
    if(imgNum >= 0){
      imgNum ++;
      imgMove();
    }
  }
  else if(mouseUp > mouseDown){ // 오른쪽으로 드래그
    console.log("right");
    if(imgNum < imgList.length){
      imgNum--;
      imgMove();
    }
  }
  else { // 드래그 폭 좁을 경우 현재 슬라이드로 되돌아가기
    e.currentTarget.marginLeft = `-${imgNum * 100}%`;
  }
  console.log(imgNum);
  mouseDrage = false;
})
imgWrap.addEventListener("mousemove", function(e){
  if(mouseDrage === true){
    let drageGap = mouseDown - e.pageX;
    let drageGapPer = 100*(drageGap/imgList[0].clientWidth);
    let marginValue = (imgNum*100)+drageGapPer;
    if(marginValue >= 0 && marginValue <= 500){
      e.currentTarget.style.marginLeft = `-${(imgNum*100)+drageGapPer}%`;
    }
  }
})
