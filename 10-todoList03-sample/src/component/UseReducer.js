import { useReducer } from "react";

//useReduce 에서 사용할 함수 선언
    // 인자 : count, action 
    // 

const reducer = (count, action) => {
    switch (action.type){
        case 1: 
            return count + 1 ; 
        case 10: 
            return count + 10 ; 
        case 100: 
            return count + 100 ; 
        case 1000:
            return count + 1000 ; 
        default :
            return count ;  
    }
}

const UseReducer =  () => {

    // useReducer 선언하기 
        // count : count 값이 수정되면 랜더링, 읽기 전용 
        // dispatch : count 값을 수정할때 호출 : setCount 
            // dispatch를 호출해서 reducer 함수가 호출이되고, 함수의 값을 돌려줌 
        // reducer 함수는 컴포넌트 외부에서 선언되어야 한다.  컴포넌트내부의 코드를 간략하게 한다.

    const [count , dispatch] = useReducer(reducer,0); 

    return (
        <div> 
            <div>{count}</div>
            <button onClick = {() => dispatch ({type:1})}> 더하기 1</button>
            <button onClick =  {() => dispatch ({type:10})}> 더하기 10</button>
            <button onClick =  {() => dispatch ({type:100})}> 더하기 100</button>
            <button onClick =  {() => dispatch ({type:1000})}> 더하기 1000</button>
        </div>
    ) ; 

}

export default UseReducer; 