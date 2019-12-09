import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

export default class Calculator extends Component {
  state = {
    ...initialState
  };

  clearMemory = () => {
    this.setState({ ...initialState });
  };

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else{
      const equals = operation === '='
      const currentOperation = this.state.operation
      
      const values = [...this.state.values]

      try{
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      }catch(e){
        values[0] =this.state.values[0]
      }

      values[1] =0 

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }

  };

  addDigit = n => {
    if (n === "." && this.state.displayValue.includes(".")) return;

    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button triple button="AC" click={this.clearMemory} />
        <Button operation button="/" click={this.setOperation} />
        <Button button="7" click={this.addDigit} />
        <Button button="8" click={this.addDigit} />
        <Button button="9" click={this.addDigit} />
        <Button operation button="*" click={this.setOperation} />
        <Button button="4" click={this.addDigit} />
        <Button button="5" click={this.addDigit} />
        <Button button="6" click={this.addDigit} />
        <Button operation button="-" click={this.setOperation} />
        <Button button="1" click={this.addDigit} />
        <Button button="2" click={this.addDigit} />
        <Button button="3" click={this.addDigit} />
        <Button operation button="+" click={this.setOperation} />
        <Button double button="0" click={this.addDigit} />
        <Button button="." click={this.addDigit} />
        <Button operation button="=" click={this.setOperation} />
      </div>
    );
  }
}
