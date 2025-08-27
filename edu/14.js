// 이벤트
function test () {
  alert('테스트');
}

// Property Listener(프로퍼티 리스터)
// 동일한 이벤트를 여러번 사용 불가
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
  alert('버튼2222');
}
btn2.onclick = () => {
  alert('2222222');
}

// addEventListener
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('버튼333');
});
btn3.addEventListener('click', btn3Alert);

// removeEventListener() : 이벤트 제거
// btn3.removeEventListener('Click', btn3Alert);

function btn3Alert(event) {
  console.log(event);
  alert('33333');
}

window.addEventListener('scroll', () => {
  console.log('scoll test');
});

// window.addEventListener('load', () => {
//   window.open('https://www.naver.com');
// });

// --------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  const regex = /^[0~9]+$/;

  const label = document.querySelector('#labelEmail');
  if(!regex.test(e.target.value)) {
    label.textContent = '숫자만 입해주세요.';
  } else {
    label.textContent = '';
  }
})

// ------ 비밀번호 보이고 안보이고 ------
// 체크박스 접근
const chkPw = document.querySelector('#seePw');
// 체크박스에 체인지 이벤트 추가
chkPw.addEventListener('change', (e) => {
  // 인풋 패스워드 접근
  const pw = document.querySelector('#pw');
  // 체크 여부 확인 분기
  if(e.target.checked) {
    // 인풋 패스워드 type속성 text로 변경
    pw.setAttribute('type', 'text');
  } else {
    // 인풋 패스워드 type속성 password로 변경
    pw.setAttribute('type', 'password');
  }
});

