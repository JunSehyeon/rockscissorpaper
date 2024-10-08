import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//1.박스2개(타이틀, 사진, 결과)
//2.가위 바위 보 버튼
//3.클릭하면 게임이 진행됨
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5.위 두 과정을 통해 승패를 따진다
//6.이기며ㄴ 초록, 지ㄴ 빨강, 비기면 검정

const choice={
  rock:{
    name:"Rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK24vgxf84ec9dGFwYi1W6BwacK2iisTEulA&s"
  },
  scissor:{
    name:"scissor",
    img:"https://media.istockphoto.com/id/1043551106/ko/%EB%B2%A1%ED%84%B0/%EA%B0%80-%EC%9C%84-%EB%B2%A1%ED%84%B0-%EB%A7%8C%ED%99%94.jpg?s=612x612&w=0&k=20&c=ARmW1L_6iifYZdA_Yf63OaM7iTEApPSg1X5UxQ2Xhtw="
  },
  paper:{
    name:"paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6yrZSAtaTm_Zzk8ijJgwf6ydQLP_pRCjxA&s"
  }
}

function App() {
  const[userSelect,setUserSelect]=useState()
  const[computerSelect,setComputerSelect]=useState()
  const [result,setResult]=useState("")
  const [computerResult, setComputerResult]=useState("")
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice=randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice))
    setComputerResult(judgement(computerChoice, choice[userChoice]))
  }

  const judgement=(user,computer)=>{
    console.log("user",user,"computer",computer)
    /*
    if(user.name=="Rock"){
      if(computer.name=="Rock"){
        return "tie"
      }else if(computer.name=="Scissor"){
        return "win"
      }else{
        return "lose"
      }
    }else if(user.name=="Scissor"){
      if(computer.name=="Scissor"){
        return "tie"
      }else if(computer.name=="Paper"){
        return "win"
      }else{
        return "lose"
      }
    }else{
      if(computer.name=="Paper"){
        return "tie"
      }else if(computer.name=="Rock"){
        return "win"
      }else{
        return "lose"
      }
    } */

      if(user.name===computer.name){
        return "tie"
      }else if(user.name==="Rock")
        return computer.name==="scissor"?"win":"lose";
      else if(user.name==="scissor")
        return computer.name==="paper"?"win":"lose";
      else if(user.name==="paper")
        return computer.name==="Rock"?"win":"lose";
  }

  const randomChoice =()=>{
    let itemArray=Object.keys(choice);// 객체 키값을 어레이로 바꿔줌
    //console.log("random",itemArray)
    let randomItem= Math.floor(Math.random()*itemArray.length);
    //console.log("random",randomItem)
    let final=itemArray[randomItem]
    //console.log("final",final)
    return choice[final];
  }

  return (
  <div> 
    <div className='main'>
      <Box title='You' item={userSelect} result={result}/>
      <Box title='Computer' item={computerSelect} result={computerResult}/>
    </div>
    <div className='main'>
      <button onClick={()=>play('scissor')}>가위</button>
      <button onClick={()=>play('rock')}>바위</button>
      <button onClick={()=>play('paper')}>보</button>
    </div>
  </div>    
  );
}

export default App;
