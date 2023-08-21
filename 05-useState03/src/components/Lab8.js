
import { useState } from 'react';

function Lab8() {

  const [inputValue, setInputValue] = useState("");
  const [fruits, setFruits] = useState(['사과','바나나','오랜지']);

  function onChangeHandler(e) {
    setInputValue(e.target.value);
  }

  function onClickHandler(e) {
    setFruits([... fruits, inputValue]);
    setInputValue("");
  }

  return (
    <div className="App">
      <h1>Lab8 - 버튼을 사용해서 내용을 추가함. </h1>
      <input value={inputValue} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>추가</button>
      <ul>
        {fruits.map(function(fruit, index) {
          return <li key={index}>{fruit}</li>
        })}
      </ul>
    </div>
  );


}

export default Lab8; 