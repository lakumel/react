import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import {useState} from 'react'; 


function App() {

    // useState  : 상태 (값) 변경되면 랜더링, 상태값은 부모에서 자식으로 전달 할 수 있음. 
          // 형제 레벨의 컴포넌트로는 직접 전달이 안된다. 
          // 자식에서 부모로 전달은 안됨 
    // Viewer 컴포넌트에 전달할 상태값   
    const [count, setCount] = useState(0); 

    // 함수 호출 : 자식 ==> 부모로 호출 
    const handleSetCount = (value) => {
        setCount ( count + value) ; 
    }

  return (
    <div className="App">
        <h1> Simple Counter </h1>

        <section>
        <Viewer count = {count} /> 
        </section>

        <section>
        <Controller  handleSetCount = {handleSetCount} /> 
        </section>
    </div>
  );
}

export default App;
