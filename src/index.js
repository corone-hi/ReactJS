import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



//these are component
// componetn is HTML을 반환하는 함수
//react는 component를 사용해서 HTML 처럼 작성하려는 경우 필요
//jsx => javascript + HTML (react의 유일한 개념)
ReactDOM.render(<App />, document.getElementById('root'));
