// 아래의 프로그램을 만들어 주세요.
// 사과 게임 위에 장기 삽입
// 어메이징브릭에 베이지 배경색 추가
// 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정
const apple = document.querySelector('#apple');
const newList = document.createElement('li');
newList.textContent = '장기';
const ul = document.querySelector('ul');
ul.insertBefore(newList, apple);

const listBackground = document.querySelector('#ul li:last-child');
listBackground.style.backgroundColor = 'beige';

function changeLiColor() {
  const selectorAllli = document.querySelectorAll('li');
  selectorAllli.forEach((item, index) => {
    if (index % 2 === 1) {
      item.style.color = 'red';
    } else {
      item.style.color = 'blue';
    }
  })
}

changeLiColor();

const result = {
  title: '타이틀',
  content: '내용내용',
  img: ''
};

addCard(result);

// 카드 구조 만들기

function addCard(item) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = item.title;

  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard);
}

