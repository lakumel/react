
function Lab3() {

      const fruitsNames = ['사과','바나나','오랜지'];
      const fruits= [];

      for(let i=0; i<fruitsNames.length; i++) {
        fruits.push(<li>{fruitsNames[i]}</li>)
      }


      return (
        <div className="App">
          <h1> Lab3 - for 문을 사용해서 적용 </h1>
          <ul>
            {fruits}
          </ul>
        </div>
      );


}

export default Lab3; 