import React from "react";
import ColorChange from "./ColorChange";

function App() {
  return (
    <div style={{ textAlign: 'center',marginTop: '10px'}}>
      <h1 style={{borderBottom: '2px solid blue',color:'red'}}>Text Effects</h1>
      <ColorChange />
    </div>
  ); 
  
}

export default App;