mport React from 'react';


// 현재 작업하는 것은 임시로,
// 함수형 컴포넌트를 2개 생성해서,(JSX) 문법으로 간단히
// 구현 하는 작업. -> 자바 헬로우 월드
// 클래스 컴포넌트 형식도 간단히 봐두어야 하고, (보험성)
// 기작업이 클래스 컴포넌트로 작업한게 많아서,
// 최근에 작업들은 거의다, 함수형 컴포넌트를 씁니다.
// 머리가 아파서 한개만 할래요. ->함수형 컴포넌트만 쓰면 됩니다.
function Book(props) {
  // 함수형 컴포넌트,
  return (
    // jsx 문법이 갑자기 나옴.
    <div>
      <h1>{`책 이름: ${props.name}입니다.`}</h1>
      <h2>{`총 페이지: ${props.numOfPage}입니다.`}</h2>
    </div>
  );
}
export default Book;


import React from 'react';
import Book from './Book';


function Library(props) {
  // Library , 함수형 컴포넌트를 만들었고,
  // 여기에 아까 만들었던, Book 컴포넌트를 사용하는 예제 코드.
  return (
    <div>
      <Book name="이상용1" numOfPage={100} />
      <Book name="이상용2" numOfPage={200} />
      <Book name="이상용3" numOfPage={300} />
      <Book name="이상용4" numOfPage={400} />
    </div>
  );
}
export default Library;