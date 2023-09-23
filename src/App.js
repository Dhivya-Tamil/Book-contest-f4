import React, { useState } from "react";
import BookSearch from "./Components/BookSearch.js";
import BookDisplay from "./Components/BookDisplay.js";


const App = ()=>{
  const[display,setDisplay] = useState([]);
  // const[display,setDisplay] = useState([]);
  return(
    <div>
      <BookSearch setDisplay={setDisplay} />
      <BookDisplay display={display} />
    </div>
  )
}
export default App;