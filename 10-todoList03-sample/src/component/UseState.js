import {useState} from 'react'; 

const UseState =  () => {

    // useState : 상태 (데이타) 가 변경되면 자동으로 랜더링됨. 
        //상태 값을 하위 컴포넌트의 props 로 전달 
        
    const [count , setCount] = useState(0); 

    const add1 = () => {
        setCount (count + 1); 
    }
    const add10 = () => {
        setCount (count + 10); 
    }
    const add100 = () => {
        setCount (count + 100); 
    }
    const add1000 = () => {
        setCount (count + 1000); 
    }
    return (
        <div> 
             <div>{count}</div>
            <button onClick = {add1}> 더하기 1</button>
            <button onClick = {add10}> 더하기 10</button>
            <button onClick = {add100}> 더하기 100</button>
            <button onClick = {add1000}> 더하기 1000</button>
        </div>
    ) ; 

}

export default UseState; 