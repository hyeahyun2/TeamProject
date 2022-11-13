// const sWrap = document.getElementById('SliderWrap_hj');
// const sList = document.querySelector('.Slider_hj');
// const lis = sList.querySelectorAll('li');
// const btn = document.querySelectorAll('#btnWrap_hj button');
// const lisCopy1 = lis[0].cloneNode(true);
// const lisCopy2 = lis[lis.length-1].cloneNode(true)
// let lisNum = lis.length + 2;
// console.log(lisNum);
// let sNum = 10;
// let state = 1;
// sList.append(lisCopy1);
// sList.prepend(lisCopy2);
// // let pos = sList.clientWidth;
// sList.style.width = `${lisNum*25}%`;
// sList.style.transform = `translateX(-${10}%)`;

// let nextSlider = ()=> {
//     sNum += 10;
//     sList.style.transition = '1s';
//     sList.style.transform = `translateX(-${sNum}%)`;
//     setTimeout(()=>{
//       if ( sNum == 50 ) {
//         sList.style.transition = '0s';
//         sList.style.transform = `translateX(-${10}%)`;
//         sNum = 10;
//       }
//       else {
//         state = 1;
//       }
//     }, 1000)
// }
// let prevSlider = ()=> {
//     sNum -= 10;
//     sList.style.transition = '1s';
//     sList.style.transform = `translateX(-${sNum}%)`;
//     setTimeout(()=>{
//       if ( sNum == 0 && state == 0 ) {
//         sList.style.transition = '0s';
//         sList.style.transform = `translateX(-${60}%)`;
//         sNum = 60;
//       }
//       state = 1;
//     }, 1000)
// }

// let timer = setInterval(nextSlider, 3000);

// btn[1].addEventListener('click', ()=> {
//   clearInterval(timer);
//   if ( state == 1) {
//     state = 0;
//     nextSlider();
//   }
// })
// btn[0].addEventListener('click', ()=> {
//   clearInterval(timer)
//   if ( state == 1 ) {
//     state = 0;
//     prevSlider();
//   }
// })


const slides = document.querySelector('.Slider_hj');
const slide = document.querySelectorAll('.Slider_hj li');
const currentIdx = 0;
const slideCount = slide.length;
const slideWidth = 25;
prevBtn = document.querySelector('.prev_hj');
nextBtn = document.querySelector('.next_hj');

makeClone();

function makeClone() { 
  for (let i = 0; i<slideCount; i++) {
      // a.cloneNode(), a.cloneNode(true)
      let cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      //a.appendChild(b)
      slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i>=0; i--) {
      let cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      //a.prepend(b)
      slides.prepend(cloneSlide);
  }
  // ul의 넓이를 지정하기 위해 새로운 함수 호출
  updateWidth();
  // 초기 위치 함수
  setInitialPos(); 

  setTimeout(function (){
    slides.classList.add('animated');
  },100);
}

function updateWidth() { 
  // 새로 복사된 li들 까지 모두 부른 후 그 길이를 
  // newSlideCount 변수에 넣는다.
  let currentSlides = document.querySelectorAll('.Slider_hj li');
  let newSlideCount = currentSlides.length;
  // 그다음의 슬라이더 갯수만큼 넓이를 구한뒤 ul 넓이 지정
  let newWidth = slideWidth * newSlideCount + `%`;
  slides.style.width = newWidth;
}

function setInitialPos() {
  let initialTranslateValue = -(slideWidth * slideCount);
  // slides ( transform: translateX(-값%))
  slides.style.transform = `translateX(-200%)`;
  console.log(slides.style.transform);
}

nextBtn.addEventListener('click', function(){
  moveSlide(currentIdx + 1); 
});
nextBtn.addEventListener('click', function(){
  moveSlide(currentIdx - 1); 
});

function moveSlide(num){
  slides.style.left = -num * slideWidth + '%';
  currentIdx = num;
}

