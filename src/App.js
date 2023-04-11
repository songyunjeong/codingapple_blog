import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function changeTitle() {
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          changeTitle();
        }}
      >
        글 수정
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순 정렬
      </button>
      {글제목.map((data, i) => {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {data}
            </h4>
            <button
              onClick={() => {
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
              }}
            >
              👍🏻 {따봉[i]}
            </button>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal ? <Modal 글제목={글제목} changeTitle={changeTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.changeTitle();
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
