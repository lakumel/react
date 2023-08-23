import './Header.css'; 

//화살표 함수를 사용한 컴포넌트 생성 

const Header = () => {

    return (
        <div className = "Header">
            <h3> 오늘은 🧡❤  </h3>
            <h1> { new Date().toDateString() }</h1>
        </div>
    ); 
}

export default Header; 