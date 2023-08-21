
function Lab5() {


    const fruitsNames = ['사과','바나나','오랜지'];
    const fruits = fruitsNames.map(function(fruit, index) {
      return <li key={index}>{fruit}</li>
    });
    return (
      <div className="App">
        <h1>Lab5 - map을 외부에서 선언해  엘리먼트를 생성할때 고유키를 넣으면서 생성</h1>
        <ul>
          {fruits}
        </ul>
      </div>
    );


}

export default Lab5; 