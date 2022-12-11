const fixedBtn = document.getElementById("fixedBtn");

// 더보기 클릭시 리스트 추가
// ajax 사용
const xhr = new XMLHttpRequest();
const posts = document.getElementById("posts");
const tbody = posts.querySelector("tbody");

function tableList(){
  // page = this.getAttribute();
  xhr.open('GET', `./reviewList.html`); //HTTP 요청 초기화. 통신 방식과 url 결정
  xhr.send(); // url에 요청 보내기
  // 이벤트 등록. XMLHttpRequest 객체의 readyState 프로퍼티 값이 변할 때마다 자동으로 호출
  xhr.onreadystatechange = ()=>{
    // readyState 프로퍼티의 값이 DONE : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨
    if(xhr.readyState !== XMLHttpRequest.DONE) return;
    console.log(xhr.status, xhr.statusText);
    if(xhr.status === 200){ // 서버(url)에 문서가 존재할 때
      tbody.insertAdjacentHTML("beforeend", xhr.response);
    }
    else { // 서버(url)에 문서가 존재하지 않을 때
      console.log("Error", xhr.status, xhr.statusText);
    }
  }
}
window.addEventListener("load", tableList); // 페이지 로드시 디폴트 리스트

// 정렬 방식(#array)에 따른 리스트 재나열
const array = document.getElementById("array");
const arrList = array.querySelectorAll("li");

arrList.forEach(element => {
  element.addEventListener("click",(e)=>{
    for(let i=0; i<arrList.length; i++){
      arrList[i].classList.remove("select");
    }
    e.currentTarget.classList.add("select"); // 선택된 정렬방식 표시
    // 리스트 초기화 및 다시 불러오기
    tbody.innerHTML = null;
    tableList();
  })
});


// category 선택
const category = document.getElementById("category");
const goryPTag = category.querySelector("p");
const goryList = category.querySelector(".goryList");
const goryItem = goryList.querySelectorAll("li");
goryPTag.addEventListener("mouseenter",()=>{
  category.style.height = "150px";
  goryList.style.border = "1px solid #000";
})
category.addEventListener("mouseleave", (e)=>{
  e.currentTarget.style.height = "25px";
  goryList.style.border = "unset";
})

goryItem.forEach(element => {
  element.addEventListener("click",(e)=>{
    let pTagText = e.currentTarget.innerText;
    goryPTag.innerText = element.innerText;
    element.innerText = pTagText;
    // 리스트 초기화 및 다시 불러오기
    tbody.innerHTML = null;
    tableList();
  })
});