// const sWrap = document.getElementById('SliderWrap_hj');
// const sList = document.querySelector('.Slider_hj');
// const lis = sList.querySelectorAll('li');
// const btn = document.querySelectorAll('#btnWrap_hj button');
// const lisCopy1 = lis[0].cloneNode(true);
// const lisCopy2 = lis[lis.length-1].cloneNode(true);
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


// const slides_sec3 = document.querySelector('.Slider_hj');
// const slide_sec3 = document.querySelectorAll('.Slider_hj li');
// const currentIdx_sec3 = 0;
// const slideCount_sec3 = slide.length;
// const slideWidth_sec3 = 25;
// prevBtn_sec3 = document.querySelector('.prev_hj');
// nextBtn_sec3 = document.querySelector('.next_hj');

// makeClone_sec3();

// function makeClone_sec3() { 
//   for (let i = 0; i<slideCount_sec3; i++) {
//       // a.cloneNode(), a.cloneNode(true)
//       let cloneSlide_sec3 = slide[i].cloneNode(true);
//       cloneSlide_sec3.classList.add('clone');
//       //a.appendChild(b)
//       slides_sec3.appendChild(cloneSlide);
//   }
//   for (let i = slideCount_sec3 - 1; i>=0; i--) {
//       let cloneSlide_sec3 = slide[i].cloneNode(true);
//       cloneSlide_sec3.classList.add('clone');
//       //a.prepend(b)
//       slides_sec3.prepend(cloneSlide_sec3);
//   }
//   // ul의 넓이를 지정하기 위해 새로운 함수 호출
//   updateWidth_sec3();
//   // 초기 위치 함수
//   setInitialPos_sec3(); 

//   setTimeout_sec3(function (){
//     slides.classList.add('animated');
//   },100);
// }

// function updateWidth_sec3() { 
//   // 새로 복사된 li들 까지 모두 부른 후 그 길이를 
//   // newSlideCount 변수에 넣는다.
//   let currentSlides_sec3 = document.querySelectorAll('.Slider_hj li');
//   let newSlideCount_sec3 = currentSlides_sec3.length;
//   // 그다음의 슬라이더 갯수만큼 넓이를 구한뒤 ul 넓이 지정
//   let newWidth_sec3 = slideWidth_sec3 * newSlideCount_sec3 + `%`;
//   slides_sec3.style.width = newWidth_sec3;
// }

// function setInitialPos_sec3() {
//   let initialTranslateValue_sec3 = -(slideWidth_sec3 * slideCount_sec3);
//   // slides ( transform: translateX(-값%))
//   slides_sec3.style.transform = `translateX(-33.28%)`;
//   console.log(slides_sec3.style.transform);
// }

// nextBtn_sec3.addEventListener('click', function(){
//   moveSlide(currentIdx_sec3 + 1); 
// });
// nextBtn_sec3.addEventListener('click', function(){
//   moveSlide(currentIdx_sec3 - 1); 
// });

// function moveSlide_sec3(num){
//   slides_sec3.style.left = -num * slideWidth_sec3 + '%';
//   currentIdx_sec3 = num;
// }

const sWrap = document.getElementById('SliderWrap_hj');
const sList = document.querySelector('.Slider_hj');
const list = sList.querySelectorAll('li');
const btn = document.querySelectorAll('#btnWrap_hj button');

let sNum = 0;
let state = 1;

let nextSlider = ()=> {
    sNum += 25;
    sList.style.transition = '1s';
    sList.style.transform = `translateX(-${sNum}%)`;
    sList.appendChild(list[0]);
   
}
let prevSlider = ()=> {
    sNum -= 10;
    sList.style.transition = '1s';
    sList.style.transform = `translateX(-${sNum}%)`;
    setTimeout(()=>{
      if ( sNum == 0 && state == 0 ) {
        sList.style.transition = '0s';
        sList.style.transform = `translateX(-${60}%)`;
        sNum = 60;
      }
      state = 1;
    }, 1000)
}

// let timer = setInterval(nextSlider, 3000);

btn[1].addEventListener('click', ()=> {
  clearInterval(timer);
  if ( state == 1) {
    state = 0;
    nextSlider();
  }
})
btn[0].addEventListener('click', ()=> {
  clearInterval(timer)
  if ( state == 1 ) {
    state = 0;
    prevSlider();
  }
})




