// 더보기 클릭시 리스트 추가
const xhr = new XMLHttpRequest();

const contentWrap = document.getElementById("contentWrap");
const posts = document.getElementById("posts");
const moreBtn = contentWrap.querySelector(".moreBtn");

// const postUl = posts.querySelector("ul");
let clickNum = 0;
// ajax 사용
function moreList(){
  // page = this.getAttribute();
  xhr.open('GET', `./saleList.html`); //HTTP 요청 초기화. 통신 방식과 url 결정
  xhr.send(); // url에 요청 보내기
  // 이벤트 등록. XMLHttpRequest 객체의 readyState 프로퍼티 값이 변할 때마다 자동으로 호출
  xhr.onreadystatechange = ()=>{
    // readyState 프로퍼티의 값이 DONE : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨
    if(xhr.readyState !== XMLHttpRequest.DONE) return;
    console.log(xhr.status, xhr.statusText);
    if(xhr.status === 200){ // 서버(url)에 문서가 존재할 때
      posts.insertAdjacentHTML("beforeend", xhr.response);
      const postUl = posts.querySelectorAll("ul");
      clickNum++;
      posts.style.height = `${80 * clickNum}%`;
      postUl.forEach(element =>{
        element.style.height = `${100 / clickNum}%`
      })
      // postUl.style.height = `${100 / clickNum}%`
      console.log(80 * clickNum);
    }
    else { // 서버(url)에 문서가 존재하지 않을 때
      console.log("Error", xhr.status, xhr.statusText);
    }
  }
}

window.addEventListener("load", moreList)
moreBtn.addEventListener("click", moreList);


// array list 클릭시 해당 리스트 표시 / 나열
const array = document.getElementById("array");
const arrList = array.querySelectorAll("li");
arrList.forEach(element => {
  element.addEventListener("click",(e)=>{
    for(let i=0; i<arrList.length; i++){
      arrList[i].classList.remove("select");
    }
    e.currentTarget.classList.add("select");
    // 리스트 초기화 및 다시 불러오기
    posts.innerHTML = null;
    clickNum = 0;
    moreList();
  })
});
