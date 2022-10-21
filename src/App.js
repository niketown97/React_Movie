import Button from './button';
import styles from './App.module.css';
import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit =(event) =>{
    event.preventDefault();
    console.log(toDo);
    if(toDo ===""){
      return;
    }
    setToDo("");
    setToDos((currentArray) => 
       [toDo,...currentArray]);
  };
  return(
  <div>
    <h1>해야할 일은 ({toDos.length}) 개 입니다.</h1>
    <form onSubmit={onSubmit}>
        <input 
        onChange={onChange} 
        type="text" 
        placeholder = "할 일을 입력하세요." />
        <button>추가하기</button>
      </form>
      <hr />
      {toDos.map((item, index) =><li key={index}>{item.toUpperCase()}</li>)}
      <Button />
  </div>
  )
}

export default App;
// (function Hello () { 
  //   useEffect(() => {
  //     console.log("안녕하세요");
  //     return() => console.log("안녕히가세요");
  //   },[])
  //   return <h1>안녕하세요</h1>;
  // }
  
  // const [counter,setValue] = useState(0);
  // const [keyword,setKeyword] = useState("");
  // const [showing, setShowing] = useState(false);
  // const onChange = (event) => {
  //   setKeyword(event.target.value);
  // }
  // const onClick =() =>{
  //   setValue((prev)=>prev + 1);
  // }
  // const onClick2 = () =>{
  //   setShowing((prev)=> !prev);
  // }
  // // console.log("저는 항상 실행됩니다.");
  
  // useEffect(() => {
  //   console.log("저는 한번만 실행합니다.")
  // },[]);

  // useEffect(() => {
  //     console.log("키워드 변화");
  // },[keyword]);//keyword가 변화할때만 함수 실행

  // useEffect(() => {
  //   console.log("카운터 변화");
  // },[counter]);//counter가 변화할때만 함수 실행
  // useEffect(() => {
  //   console.log("키워드,카운터 변화");
  // },[counter,keyword]);//keyword와 counter가 변화할때 함수 실행
  // return (
  //   <div>
  //     {showing ? <Hello /> : null}
  //     <input onChange = {onChange} type="text" placeholder="Search here..." />
  //     <h1 className={styles.title}>Welcome back! {counter}</h1>
  //     <Button onClick={onClick} text={"Continue"}/>
  //     <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button> 
  //   </div>
  // );)