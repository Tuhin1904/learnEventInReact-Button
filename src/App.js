import React,{useState} from "react";

function App() {

  const color1="red";
  let[cColor, setNColor]=useState(color1) 
  let[name, setName]= useState('Click me ')


  let bgChange=() =>{
      console.log("Mouse entered")
      setNColor('pink')
      setName('Hi Tuhin 💞')
  }
  let bgback=() =>{
      setName('Click me')
      setNColor(color1)
      console.log("Mouse left")
  }
  return (
    <>
      <div style={{backgroundColor:cColor}}>
      <button onMouseEnter={bgChange} onMouseLeave={bgback}>{name}</button>
      </div>
    </>
  );
}

export default App;
