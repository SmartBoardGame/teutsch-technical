import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";



function App() {
  const [calculatorBarIndex, updateCalculatorBar] = useState(0)
  return (
    <div className="main">
      <section className="calculator-body">
        <input type="text" value={"TODO: makee this work ;)"} id="calculator-input" />
        <img src={logo} className="react-logo" alt="logo" />
        <div>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("mult", calculatorBarIndex))}>*</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("div", calculatorBarIndex))}>/</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("exp", calculatorBarIndex))}>^</button>
        </div>
        <div>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("zero", calculatorBarIndex))}>0</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("sub", calculatorBarIndex))}>-</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("add", calculatorBarIndex))}>+</button>
        </div>
        <div>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("seven", calculatorBarIndex))}>7</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("eight", calculatorBarIndex))}>8</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("nine", calculatorBarIndex))}>9</button>
        </div>
        <div>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("four", calculatorBarIndex))}>4</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("five", calculatorBarIndex))}>5</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("six", calculatorBarIndex))}>6</button>
        </div>
        <div>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("one", calculatorBarIndex))}>1</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("two", calculatorBarIndex))}>2</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("three", calculatorBarIndex))}>3</button>
        </div>
      </section>
    </div>
  );
}

function barUpdaterFunc(key: string, calculatorBarIndex: number) {
  let ourResStr: String = "";
  

  if (calculatorBarIndex !== 0)
    //non-empty calc-bar
    ourResStr += calculatorBarIndex.toString();

  //define all codes for our calculator to use
  
  if (key === "one"){
    ourResStr += "1"
  }else if (key === "two"){
    ourResStr += "2"
  }else if (key === "three"){
    ourResStr += "3"
  }else if (key === "four"){
    ourResStr += "4"
  }else if (key === "five"){
    ourResStr += "5"
  }else if (key === "six"){
    ourResStr += "6"
  }else if (key === "seven"){
    ourResStr += "7"
  }else if (key === "eight"){
    ourResStr += "8"
  }else if (key === "nine"){
    ourResStr += "9"
  }
  console.log(ourResStr)
  return Number(ourResStr)
}

export default App;
