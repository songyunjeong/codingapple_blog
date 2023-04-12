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
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState('');

  let now = new Date();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();

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
                setTitle(i);
              }}
            >
              {data}{' '}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍🏻 {따봉[i]}
              </span>
            </h4>
            <p>
              {todayMonth}월 {todayDate}일 발행
            </p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        type='text'
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (input === '') {
            return;
          }
          let copy = [...글제목];
          copy.unshift(input);
          글제목변경(copy);
        }}
      >
        등록
      </button>

      {modal ? (
        <Modal
          todayMonth={todayMonth}
          todayDate={todayDate}
          title={title}
          changeTitle={changeTitle}
          글제목={글제목}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>
        날짜 {props.todayMonth}월 {props.todayDate}일
      </p>
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
