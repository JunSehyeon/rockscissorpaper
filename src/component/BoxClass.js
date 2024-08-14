import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
  }
  getResult = () => {
    if (this.props.title === "Computer"){
        if (this.props.result === "win") {
            this.result = "lose";
          } else if (this.props.result === "lose") {
            this.result = "win";
          } else {
            this.result = this.props.result; 
          }
    }else {
        this.result = this.props.result; 
      }
  };
  render() {
    this.getResult();
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <h2 data-testid="item-name">
          {this.props.item && this.props.item.name}
        </h2>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
          alt={this.props.item ? this.props.item.name : ""}
        />
        <h2>{this.result}</h2>
      </div>
    );
  }
}