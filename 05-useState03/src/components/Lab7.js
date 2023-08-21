import { useState } from 'react';

function Lab7() {

  // JSX 문법을 사용하여 입력 폼을 만들고, 사용자가 입력한 값을 콘솔에 출력하는 React 컴포넌트를 작성하세요.


    const [inputValue, setInputValue] = useState("");
    function onChangeHandler(e) {
      setInputValue(e.target.value);
      console.log(e.target.value);
    }
    return (
      <div className="App">
        <h1> Lab7 - JSX 문법을 사용하여 입력 폼을 만들고, 사용자가 입력한 값을 콘솔에 출력하는 React 컴포넌트를 작성</h1>
        <input value={inputValue} onChange={onChangeHandler} />
      </div>
    );

}

export default Lab7; 