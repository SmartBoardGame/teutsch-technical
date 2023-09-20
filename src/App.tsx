import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//global 'operator' variable, I am sure there are better ways to implement this logic, but due to time constraints I'll stick with this approach for now.
let operator: string = "";
let firstHalf: string = "";

//function to make our component for displaying numbers in the calculator bar
function BarDisplayComp(toDisplay: string){
  return <input type="text" value={toDisplay} id="calculator-input" />
}

function App() {
  const [calculatorBarIndex, updateCalculatorBar] = useState(0)
  

  return (
    <div className="main">
      <section className="calculator-body">
      <input type="text" value={firstHalf+operator+calculatorBarIndex} id="calculator-input" />
        <img src={logo} className="react-logo" alt="logo" />
        <div>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("neg", calculatorBarIndex))}>+/-</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("eql", calculatorBarIndex))}>=</button>
          <button className="calculator-button" onClick={() => updateCalculatorBar(barUpdaterFunc("CE", calculatorBarIndex))}>CE</button>
        </div>
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
  let ourResStr: string = "";
  

  if (calculatorBarIndex !== 0)
    //non-empty calc-bar
    ourResStr += calculatorBarIndex.toString();

  //define all codes for our calculator to use
  if (key === "one"){
    ourResStr += "1";
  }
  else if (key === "two"){
    ourResStr += "2";
  }
  else if (key === "three"){
    ourResStr += "3";
  }
  else if (key === "four"){
    ourResStr += "4";
  }
  else if (key === "five"){
    ourResStr += "5";
  }
  else if (key === "six"){
    ourResStr += "6";
  }
  else if (key === "seven"){
    ourResStr += "7";
  }
  else if (key === "eight"){
    ourResStr += "8";
  }
  else if (key === "nine"){
    ourResStr += "9";
  }
  else if (key === "zero"){
    ourResStr += "0";
  }
  else if (key === "CE"){
    ourResStr = "0";
    operator = "";
    firstHalf = "";
  }
  else if (key === "add"){
    //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
    if (operator !== ""){
      let answer: number  = 0;
      if (operator === "+"){
        answer = Number(firstHalf) + Number(ourResStr);
      }
      else if (operator === "-"){
        answer = Number(firstHalf) - Number(ourResStr);
      }
      else if (operator === "/"){
        answer = Number(firstHalf) / Number(ourResStr);
      }
      else if (operator === "*"){
        answer = Number(firstHalf) * Number(ourResStr);
      }
      else if (operator === "^"){
        answer = Number(firstHalf) ** Number(ourResStr);
      }
      ourResStr = answer.toString();
      firstHalf = ourResStr;
    }
    operator = "+";
    firstHalf = ourResStr;
    ourResStr = "0";
  }
  else if (key === "sub"){
    //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
    if (operator !== ""){
      let answer: number  = 0;
      if (operator === "+"){
        answer = Number(firstHalf) + Number(ourResStr);
      }
      else if (operator === "-"){
        answer = Number(firstHalf) - Number(ourResStr);
      }
      else if (operator === "/"){
        answer = Number(firstHalf) / Number(ourResStr);
      }
      else if (operator === "*"){
        answer = Number(firstHalf) * Number(ourResStr);
      }
      else if (operator === "^"){
        answer = Number(firstHalf) ** Number(ourResStr);
      }
      ourResStr = answer.toString();
      firstHalf = ourResStr;
    }
    operator = "-";
    firstHalf = ourResStr;
    ourResStr = "0";
  }
  else if (key === "div"){
    //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
    if (operator !== ""){
      let answer: number  = 0;
      if (operator === "+"){
        answer = Number(firstHalf) + Number(ourResStr);
      }
      else if (operator === "-"){
        answer = Number(firstHalf) - Number(ourResStr);
      }
      else if (operator === "/"){
        answer = Number(firstHalf) / Number(ourResStr);
      }
      else if (operator === "*"){
        answer = Number(firstHalf) * Number(ourResStr);
      }
      else if (operator === "^"){
        answer = Number(firstHalf) ** Number(ourResStr);
      }
      ourResStr = answer.toString();
      firstHalf = ourResStr;
    }
    operator = "/";
    firstHalf = ourResStr;
    ourResStr = "0";
  }
  else if (key === "mult"){
    //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
    if (operator !== ""){
      let answer: number  = 0;
      if (operator === "+"){
        answer = Number(firstHalf) + Number(ourResStr);
      }
      else if (operator === "-"){
        answer = Number(firstHalf) - Number(ourResStr);
      }
      else if (operator === "/"){
        answer = Number(firstHalf) / Number(ourResStr);
      }
      else if (operator === "*"){
        answer = Number(firstHalf) * Number(ourResStr);
      }
      else if (operator === "^"){
        answer = Number(firstHalf) ** Number(ourResStr);
      }
      ourResStr = answer.toString();
      firstHalf = ourResStr;
    }
    operator = "*";
    firstHalf = ourResStr;
    ourResStr = "0";
  }
  else if (key === "exp"){
    //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
    if (operator !== ""){
      let answer: number  = 0;
      if (operator === "+"){
        answer = Number(firstHalf) + Number(ourResStr);
      }
      else if (operator === "-"){
        answer = Number(firstHalf) - Number(ourResStr);
      }
      else if (operator === "/"){
        answer = Number(firstHalf) / Number(ourResStr);
      }
      else if (operator === "*"){
        answer = Number(firstHalf) * Number(ourResStr);
      }
      else if (operator === "^"){
        answer = Number(firstHalf) ** Number(ourResStr);
      }
      ourResStr = answer.toString();
      firstHalf = ourResStr;
    }
    operator = "^";
    firstHalf = ourResStr;
    ourResStr = "0";
  }
  else if (key === "eql"){
    if (firstHalf !== ""){
      let answer: number  = 0;
      if (operator === "+"){
        answer = Number(firstHalf) + Number(ourResStr);
      }
      else if (operator === "-"){
        answer = Number(firstHalf) - Number(ourResStr);
      }
      else if (operator === "/"){
        answer = Number(firstHalf) / Number(ourResStr);
      }
      else if (operator === "*"){
        answer = Number(firstHalf) * Number(ourResStr);
      }
      else if (operator === "^"){
        answer = Number(firstHalf) ** Number(ourResStr);
      }
      ourResStr = answer.toString();
      console.log(answer);
      operator = "";
      firstHalf = "";
      return answer;
    }
  }
  else if (key === "neg"){
    ourResStr = (Number(ourResStr) * (-1)).toString()
  }
  if (firstHalf !== ""){
  console.log(firstHalf+operator+ourResStr)
  }
  else{
    console.log(ourResStr)
  }
  return Number(ourResStr)
}


export default App;
