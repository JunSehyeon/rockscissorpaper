import React, {Component} from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

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

export default class AppClass extends Component{
    constructor(){
        super();
        this.state={
            userSelect: null,
            computerSelect: null,
            result:"",
        };
    }

    play =(userChoice)=>{
        let computerChoice=this.randomChoice();
        this.setState({
          userSelect: choice[userChoice],
          computerSelect: computerChoice,
          result: this.judgement(choice[userChoice], computerChoice),
        })
    }
    randomChoice = ()=>{
      let itemArray=Object.keys(choice);
      let randomItem=Math.floor(Math.random()*itemArray.length);
      let final = itemArray[randomItem];
      return choice[final];
    }
    judgement=(user, computer)=>{
      if(user.name===computer.name){
        return "tie"
      }else if(user.name==="Rock")
        return computer.name==="scissor"?"win":"lose";
      else if(user.name==="scissor")
        return computer.name==="paper"?"win":"lose";
      else if(user.name==="paper")
        return computer.name==="Rock"?"win":"lose";
    }

    render(){
      return(
      <div> 
    <div className='main'>
      <BoxClass title='You' item={this.state.userSelect} result={this.state.result}/>
      <BoxClass title='Computer' item={this.state.computerSelect} result={this.state.result}/>
    </div>
    <div className='main'>
      <button onClick={()=> this.play('scissor')}>가위</button>
      <button onClick={()=> this.play('rock')}>바위</button>
      <button onClick={()=> this.play('paper')}>보</button>
    </div>
  </div>  
      )
    }
}
