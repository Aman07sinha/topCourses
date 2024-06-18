

// This folder is basically on UseEffect 


// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

    
function App() {
  const[text, setText] = useState('');
  const[name, setName] = useState('love');
   
  // Variation 1 => Every Render pe execute hoga

  // useEffect( () => {
  //   console.log("UI RENDERING DONE");
  // });

  //  Variation 2 => First Render

  // useEffect( () => {
  //   console.log("UI RENDERING DONE");
  // },[]);

  // Variation 3 ->  whenever dependency changes
  // dependency text- jb text ki value change hoga tab code run hoga 

  // useEffect( () => {
  //   console.log("Change observed");
  // }, [name]);

  // variation 4 -> to handle unmounting of a component
  // after every one render add Event Listener

  useEffect( () => {
    // add event listener
    console.log("listener added");

    return () => {
      console.log("listener removed");
    }
  }, [text]);


  function changeHandler(event){
    // text ki value change hue h
    setText(event.target.value);
    console.log(text);
  }  

  return (
    <div className="App">
      <input type = "text" onChange={changeHandler}></input>    
    </div>
  );
}

export default App;
