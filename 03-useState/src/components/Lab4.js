
function Lab4() {


    const fruitsNames = ['사과','바나나','오랜지'];
    const fruits = fruitsNames.map(function(fruit) {
      return <li>{fruit}</li>
    });
    return (
      <div className="App">
        <h1>Lab4 - map 을 사용해서 적용</h1>
        <ul>
          {fruits}
        </ul>
      </div>
    );



}

export default Lab4; 