import {useParams} from 'react-router-dom'; 

const Edit = () => {

    // useParms 는 URL로 넘어오는 변수 값을 받는 훅 (커스텀 훅)
    // http://localhost:3000/edite/id
    const {id} = useParams(); 


    return (
        <div>
            <h1> 수정 페이지 (Edit) </h1>
          <p> 오신것을 환영 합니다.</p>

            <p> Path Param으로 넘어오는 변수값은 </p>
            <h1> {id}</h1>
        </div>
    );
}

export default Edit; 