import {useState} from 'react'; 

import './App.css';

//useState : 상태 (JSX 에 적용될 데이터 )
    // 값이 수정이 되면 자동으로 랜더링 해줌. 


function App() {

  let name = 'World'; 

  //숫자를 저장하는 state 변수 
  // state 값이 변경이 되면 컴포넌트는 자동으로 렌더링된다. 
  // 가상돔에 생성된 엘리멘트는 수정되지 않는다. 새로이 생성 
  const [number, setNumber] = useState(0); 
  const [numberStyle, setNumberStyle] = useState("numColor1"); 

  // 함수 생성하는 3가지 방법 : ES6 부터는 화살표 함수 를 많이 사용함. 
  /*
    1. 함수 생성방법
      function clickEventHandler() {
          //함수 호출시 실행 블락 
      }
    2. 함수 생성방법 
      let clickEventHandler = function() {
         //함수 호출시 실행 블락
      }
    3. 함수 생성 방법 
      let  clickEventHandler = () => {
        //함수 호출시 실행 블락
      }
  */

   let clickEventHandler = () => {
      console.log (" 함수 호출 성공"); 

      //랜덤한 값을 출력 하는 함수 
      // Math.random() 는 0 ~ 1 사이의 랜덤한 값을 생성 
      let num = Math.random() * 100; 
      // 반올림 : Math.round() 
      // 소수점이하 절삭 : Math.floor() 
      num = Math.floor(num); 
      console.log (num); 

      //양수이면 파란색으로 numberStyle변수의 값을 파란색으로 처리, 
      //setter를 사용해서 useState변수의 값 변경
      setNumberStyle("numColor1"); 

      //음수 일때 
     //  let num2 = Math.floor (Math.random() *2) ; 
      if ( Math.floor (Math.random() *2) ) {
        num = -num; 
        setNumberStyle("numColor0"); 
        console.log (num); 
      }

      //클릭시 마다 상태를 업데이트 함. <= 렌더링이 자동으로 일어남  
      setNumber (num);   

   }  


  // nubmer 변수의 값이 양수이면 파란색으로 출력 , 음수이면 빨간색으로 출력 
  return (
    <div className="App">
          <h1> Hello, {name} </h1>         
          <p className={numberStyle}> Number : {number}   </p>
          <button onClick = {clickEventHandler}> click me!! </button>


          <div style = {{color:"red", padding : 20}}> 스타일 적용 </div>
    </div>
  );
}

export default App;
