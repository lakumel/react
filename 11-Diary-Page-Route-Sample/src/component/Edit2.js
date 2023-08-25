import {useSearchParams} from 'react-router-dom'; 

const Edit2 = () => {

    // http://localhost:3000/edite?id=200&mode=abc
    // 2. Query String :  URL 뒤에 ?변수=값&변수=값&변수=값   은 searchParams 
    //     
    const [searchParams , setSearchParams] = useSearchParams(); 

    const id = searchParams.get("id"); 
    const mode = searchParams.get("mode"); 



    return (
    <div>
          <h1> 수정 페이지 (Edit2) : Query String 예제   </h1>
          <p> 오신것을 환영 합니다.</p>

          <h1> Query String으로 넘어오는 id : {id} </h1>
          <h1> Query String으로 넘어오는 mode : {mode} </h1>
    </div>
    );
}

export default Edit2; 