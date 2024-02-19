
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
  };

  const handleLoClick = () => {
    //console.log("uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
  };

  const handleClearClick = () => {
    
    let newText='';
    setText(newText)
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);

  }

   const handleOnChange = (event) => {
   // console.log("onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  // setText("new text");correct way to change the text

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'#F5DEB3':'#08244d'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label"></label>
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'#F5DEB3':'#08244d'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
     

    </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'#F5DEB3':'#08244d'}}>
        <h2><u>YOUR TEXT SUMMARY</u></h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length } Minutes taken to read</p>
        <h2><u>PREVIEW</u></h2>
        <p>{text.length>0?text:"Enter something above to preview here.."}</p>
      </div>
      </>
      

    
    
  )
}
