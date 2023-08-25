// Router : 패킷이 전송될 경로를 지정하는 장비 
// Routing : 패킷이 전송될 경로 
// Route   : 패킷이 가야할 경로를 설정 

// page-route : 요청에 대한 컴포너트를 호출 (컴포넌트가 하나의 페이지)
    // npm i react-router-dom          //설치가 필요 
    // 라이팅 처리하는 라이브러리 import

// react-router-dom v6 에 추가된 신기능 3가지 : 
      // 요청정보에 대한 CSR 기능을 사용할 수 있도록 만들어진 라이브러리 
      //1. Path Variable 을 사용할 수 있다.   "edite/:id"    , useParams 
            // <Edit /> 
      //2. Query String 을 사용할 수 있다.    "edite?id=1&mode=abc"   , useSearchParms 
            // <Edit2 /> 
      //3. Page Moving  :   이벤트 발생시 특정 페이지로 이동  useNavigate 를 사용 
            // 버튼을 클릭시 useNavigate을 사용해서 이동 처리 
            // 함수 내부에서 자동으로 특정 페이지로 이동 하도록 처리 

import { Routes , Route, Link} from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'; 

import Home from './component/Home';
import About from './component/About';
import Gallery from './component/Gallery';
import Company from './component/Company';
import Edit from './component/Edit';
import Edit2 from './component/Edit2';

// 라이팅 되는 페이지 생성 : 요청이 있을때 컴포넌트 페이지 

function App() {

  //useNavigate 정의 
  const navigage = useNavigate(); 


  return (
  <>
      <nav>
        <ul>
          <li> 
            <Link to = "/"> Home </Link>
          </li>
          <li> 
            <Link to = "/about"> about </Link>
          </li>
          <li> 
            <Link to = "/gallery"> gallery </Link>
          </li>
          <li>
            <a href="/company"> company ( 앵커태그로 적용 : 전체 리프레시 ) </a>
          </li>
          <li>
            <Link to="/edite/100"> Edit (1. Path Variable) </Link>
          </li>
          <li>
            <Link to="/edite2?id=200&mode=abc"> Edit2 (2. QueryString) </Link>
          </li>
          <li>
            <button onClick = {() => {navigage("/")}} > 홈으로 이동 </button>
          </li>
          <li>
            <button onClick = {() => {navigage(-1)}} > 이전페이지로 이동 </button>
          </li>
          <li>
            <button onClick = {() => {navigage(-2)}} > 이전이전페이지로 이동 </button>
          </li>
        </ul>
      </nav>

      <Routes>
          <Route path = "/" element = {<Home />}> </Route>
          <Route path = "/about" element = {<About />}> </Route>
          <Route path = "/gallery" element = {<Gallery />}> </Route>
          <Route path = "/company" element = {<Company />}> </Route>
          <Route path = "/edite/:id" element = {<Edit />}></Route>
          <Route path = "/edite2" element = {<Edit2 /> }></Route>
      </Routes>

  </>

  );
}

export default App;
