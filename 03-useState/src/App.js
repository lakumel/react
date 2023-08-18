import { useState } from 'react';


function App() {
  let name = "World!";
  // 숫자를 저장하는 state 변수
  // state 값이 변경 되면 컴포넌트는 자동으로 리 랜더링 된다. 
  const [number, setNumber] = useState(0);
  // style 속성에 사용 될 state 변수 선언 
  const [numberStyle, setNumberStyle] = useState({color:"blue"});

  // ES6 부터 화살표 함수 사용 가능.
  let clickEventHandler = () => {
    // Math.random() : 0 ~ 1 사이의 실수인 난수 발생
    // 곱하기 100을 하면 발생된 난수의 소숫점 자릿 수 이동.
    let num  = Math.random() * 100;
    // Math.floor() : 절삭해서 소숫점 아랫 자리를 제거 한다
    // Math.round() : 반올림
    num = Math.floor(num );
    // 생성된 숫자가 양수이면 파란색
    setNumberStyle({color:"blue"});
    if(Math.floor(Math.random() * 2)) {
      num = -num;
      // 생성된 숫자가 음수이면 빨간색으로 변경
      setNumberStyle({color:"red"})
    }
    // 클릭 할때마다 생성 되는 난수를 number에 저장
    setNumber(num);
    // setNumber()를 한 후에 number를 확인 해 보면 이전의 값이 보인다.
    console.log("number : " + number);
  }
  
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <p style={numberStyle}>Number : {number}</p>
      <button onClick={clickEventHandler}>Click me!</button>
    </div>
  );
}

export default App;