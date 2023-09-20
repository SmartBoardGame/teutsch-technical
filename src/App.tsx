import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//global 'operator' variable, I am sure there are better ways to implement this logic, but due to time constraints I'll stick with this approach for now.
let operator: string = "";
let firstHalf: string = "";
let currentHalf: string = "";

function App() {
  const [calculatorBarIndex, updateCalculatorBar] = useState("")

  // const handleKeyDown = (event: any) => {
  //   // Check if the Backspace key was pressed (key code 8) and the input value is not empty
  //   if (event.keyCode === 8 && inputValue.length > 0) {
  //     // Remove the last character from the input value
  //     setInputValue(inputValue.slice(0, -1));
  //   }
  // }; onKeyDown={handleKeyDown}

  return (
    <div className="main">
      <section className="calculator-body">
        
      <input type="text" value={calculatorBarIndex} id="calculator-input"   />
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

function barUpdaterFunc(key: string, calculatorBarIndex: string) {
  console.log(calculatorBarIndex.toString())


  //define all codes for our calculator to use
  if (key === "one"){
    currentHalf += "1";
  }
  else if (key === "two"){
    currentHalf += "2";
  }
  else if (key === "three"){
    currentHalf += "3";
  }
  else if (key === "four"){
    currentHalf += "4";
  }
  else if (key === "five"){
    currentHalf += "5";
  }
  else if (key === "six"){
    currentHalf += "6";
  }
  else if (key === "seven"){
    currentHalf += "7";
  }
  else if (key === "eight"){
    currentHalf += "8";
  }
  else if (key === "nine"){
    currentHalf += "9";
  }
  else if (key === "zero"){
    currentHalf += "0";
  }
  else if (key === "CE"){
    currentHalf = "0";
    operator = "";
    firstHalf = "";
  }

  if (currentHalf !== ""){
    //addition
    if (key === "add"){
      //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
      if (operator !== ""){
        let answer: number  = 0;
        if (firstHalf === ""){
          firstHalf = "0";
        }

        if (operator === "+"){
          answer = Number(firstHalf) + Number(currentHalf);
        }
        else if (operator === "-"){
          answer = Number(firstHalf) - Number(currentHalf);
        }
        else if (operator === "/"){
          answer = Number(firstHalf) / Number(currentHalf);
        }
        else if (operator === "*"){
          answer = Number(firstHalf) * Number(currentHalf);
        }
        else if (operator === "^"){
          answer = Number(firstHalf) ** Number(currentHalf);
        }
        firstHalf = answer.toString();
      }
      else{
        firstHalf = currentHalf.toString();
      }
      operator = "+";
      currentHalf = "";
    }

    //subtraction
    else if (key === "sub"){
      //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
      if (operator !== ""){
        let answer: number  = 0;
        if (firstHalf === ""){
          firstHalf = "0";
        }

        if (operator === "+"){
          answer = Number(firstHalf) + Number(currentHalf);
        }
        else if (operator === "-"){
          answer = Number(firstHalf) - Number(currentHalf);
        }
        else if (operator === "/"){
          answer = Number(firstHalf) / Number(currentHalf);
        }
        else if (operator === "*"){
          answer = Number(firstHalf) * Number(currentHalf);
        }
        else if (operator === "^"){
          answer = Number(firstHalf) ** Number(currentHalf);
        }
        firstHalf = answer.toString();
      }
      else{
        firstHalf = currentHalf.toString();
      }
      operator = "-";
      currentHalf = "";
    }


    //multiplication
    else if (key === "mult"){
      //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
      if (operator !== ""){
        let answer: number  = 0;
        if (firstHalf === ""){
          firstHalf = "0";
        }

        if (operator === "+"){
          answer = Number(firstHalf) + Number(currentHalf);
        }
        else if (operator === "-"){
          answer = Number(firstHalf) - Number(currentHalf);
        }
        else if (operator === "/"){
          answer = Number(firstHalf) / Number(currentHalf);
        }
        else if (operator === "*"){
          answer = Number(firstHalf) * Number(currentHalf);
        }
        else if (operator === "^"){
          answer = Number(firstHalf) ** Number(currentHalf);
        }
        firstHalf = answer.toString();
      }
      else{
        firstHalf = currentHalf.toString();
      }
      operator = "*";
      currentHalf = "";
    }


    //division
    else if (key === "div"){
      //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
      if (operator !== ""){
        let answer: number  = 0;
        if (firstHalf === ""){
          firstHalf = "0";
        }

        if (operator === "+"){
          answer = Number(firstHalf) + Number(currentHalf);
        }
        else if (operator === "-"){
          answer = Number(firstHalf) - Number(currentHalf);
        }
        else if (operator === "/"){
          answer = Number(firstHalf) / Number(currentHalf);
        }
        else if (operator === "*"){
          answer = Number(firstHalf) * Number(currentHalf);
        }
        else if (operator === "^"){
          answer = Number(firstHalf) ** Number(currentHalf);
        }
        firstHalf = answer.toString();
      }
      else{
        firstHalf = currentHalf.toString();
      }
      operator = "/";
      currentHalf = "";
    }

    //exponents
    else if (key === "exp"){
      //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
      if (operator !== ""){
        let answer: number  = 0;
        if (firstHalf === ""){
          firstHalf = "0";
        }

        if (operator === "+"){
          answer = Number(firstHalf) + Number(currentHalf);
        }
        else if (operator === "-"){
          answer = Number(firstHalf) - Number(currentHalf);
        }
        else if (operator === "/"){
          answer = Number(firstHalf) / Number(currentHalf);
        }
        else if (operator === "*"){
          answer = Number(firstHalf) * Number(currentHalf);
        }
        else if (operator === "^"){
          answer = Number(firstHalf) ** Number(currentHalf);
        }
        firstHalf = answer.toString();
      }
      else{
        firstHalf = currentHalf.toString();
      }
      operator = "^";
      currentHalf = "";
    }

    //equals code
    else if (key === "eql"){
      let answer: number  = Number(currentHalf);
      //I can definetly get rid of a lot REPETIVE code that keeps showing up over and over again (that is make some helpler function, but no time for that right now)
      if (operator !== ""){
        if (operator === "+"){
          answer = Number(firstHalf) + Number(currentHalf);
        }
        else if (operator === "-"){
          answer = Number(firstHalf) - Number(currentHalf);
        }
        else if (operator === "/"){
          answer = Number(firstHalf) / Number(currentHalf);
        }
        else if (operator === "*"){ 
          answer = Number(firstHalf) * Number(currentHalf);
        }
        else if (operator === "^"){
          answer = Number(firstHalf) ** Number(currentHalf);
        }
      }
      firstHalf="";
      operator="";
      currentHalf = answer.toString();
    }



    else if (key === "neg"){
      currentHalf = (Number(currentHalf) * (-1)).toString();
    }
    // if (firstHalf !== ""){
    // console.log(firstHalf+operator+ourResStr)
    // }
    // else{
    //   console.log(ourResStr)
    // }
    // if (currentHalf[0] === "0"){
    //   currentHalf = currentHalf.slice(1);
    // }
    if (firstHalf !== ""){
      firstHalf = (Number(firstHalf)).toString();
    }
    if (currentHalf !== ""){
      currentHalf = (Number(currentHalf)).toString();
    }
  }
  if (firstHalf+operator+currentHalf ==="Infinity"){
    return "DONT DIVIDE BY ZERO!!!"
  }
  else if (firstHalf+operator+currentHalf === "NaN"){
    return "Now you must press CE..."
  }
  return firstHalf+operator+currentHalf;
}


export default App;
