import React from 'react'

const Box = (props) => {
  const getResultColor=()=>{
    if (props.result==="win") return "win";
    if (props.result==="lose") return "lose";
    if (props.result==="tie") return "tie";
   // return "";
  }
  return (
    <div className={`box ${getResultColor()}`}>
      <h1>{props.title}</h1>
      <img className='item-img'src={props.item && props.item.img}/>
      <h2>{props.result}</h2>
    </div>
  )
}

export default Box
