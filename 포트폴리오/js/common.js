//header left/right Side
<<<<<<< HEAD
const headerLeftNav = document.querySelector(".leftNav");
const headerLeftNavUl = document.querySelector(".count");
const headerLeftNavLi = document.querySelectorAll(".count > li");
const headerLeftNavA = document.querySelectorAll(".count > li > a");
const headerLeftNavBar = document.querySelector("#headerBar");
const rightQuick = document.querySelector("#rightQuick");
const rightQuickMenu = document.querySelector(".rightQuickMenu");
const post_sec4 = document.querySelector(".Post_sec4");
const rightSearch = document.querySelector("#rightSearch");
const rightSearchPage = document.querySelector("#rightSearchPage");
const rightSearchClose = document.querySelector("#rightSearchClose");
const upperSmallNav = document.querySelector("#upperSmallNav");


/* 검색창 */
rightSearch.addEventListener("click",function(){
  rightSearchPage.classList.add("active");
  upperSmallNav.style.opacity=0;
  rightQuickMenu.style.opacity=0;
  headerLeftNav.style.opacity=0;
  headerWrap.style.opacity=0;
});
rightSearchClose.addEventListener("click",function(){
  rightSearchPage.classList.remove("active");
  upperSmallNav.style.opacity=1;
  rightQuickMenu.style.opacity=1;
  headerLeftNav.style.opacity=1;
  headerWrap.style.opacity=1;
});




/*유수현 자바스크립트 시작*/

/* 섹션2 */
const pc = document.querySelector('#pcNotice button');
const pcSlider =document.querySelector('#PCSliderWrap_sh');
const mobile = document.querySelector('#mobileNotice button');
const mSlider = document.querySelector('#MSliderWrap_sh');
const pcBtn = document.querySelector('#PCBtnWrap_sh');
const mBtn = document.querySelector('#MBtnWrap_sh');

pc.addEventListener('click', function(){
  mobile.classList.remove('on')
  pc.classList.add('on')
  mSlider.classList.remove('see')
  mSlider.classList.add('unsee')
  pcSlider.classList.remove('unsee')
  pcSlider.classList.add('see')
  mBtn.classList.remove('see')
  pcBtn.classList.add('see')
});
mobile.addEventListener('click', function(){
  pc.classList.remove('on')
  mobile.classList.add('on')
  pcSlider.classList.remove('see')
  pcSlider.classList.add('unsee')
  mSlider.classList.remove('unsee')
  mSlider.classList.add('see')
  pcBtn.classList.remove('see')
  mBtn.classList.add('see')
});



/*섹션2 슬라이더*/

// function pcSlider_sh() {
//   $('.PCSlider_sh li:last').prependTo('.PCSlider1_sh')
//   $('.PCSlider1_sh').css({'opacity':1}).animate({'opacity':0},500)
// }
// function mSlider_sh() {
//   $('.MSlider li:last').prependTo('.MSlider_sh')

// }

// setInterval(pcSlider_sh,1000)
// setInterval(mSlider_sh,1000)

const member =document.querySelectorAll('.member_sh a');

for(let a= 0; a < 5; a++){
member[a].addEventListener('mouseenter', function() {
  for(let i = 0; i< member.length; i++){
      member[i].classList.remove('onX');
      member[a].classList.add('onX');
  }
})
}

for(let b= 0; b < 5; b++){
  member[b].addEventListener('mouseleave', function() {
    for(let i = 0; i< member.length; i++){
      member[i].classList.remove('offX');
      member[b].classList.add('offX');
    }
  })
  }


const member =document.querySelectorAll('.member_sh a');

for(let a= 0; a < 5; a++){
member[a].addEventListener('mouseenter', function() {
  for(let i = 0; i< member.length; i++){
      member[i].classList.remove('onX');
      member[a].classList.add('onX');
  }
})
}

for(let b= 0; b < 5; b++){
  member[b].addEventListener('mouseleave', function() {
    for(let i = 0; i< member.length; i++){
      member[i].classList.remove('offX');
      member[b].classList.add('offX');
    }
  })
  }

/*유수현 자바스크립트 끝*/
