import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper.js';
import Solution from './components/Solution';
import Operation from './components/Operation';
import OperationsBox from './components/OperationBox.js';


/*

*/
function App() {

  const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const variables_map = ["A+B","A-B","AxB","A/B"]
  const [solution, setSol] = useState("hola")

  const [datos, setDatos] = useState({
    A:0,
    B:0
  })
 
  const handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
   setDatos({
       ...datos,
       [event.target.name] : event.target.value,
       
   })
  }

  const suma = () => {
    setSol(parseInt(datos.A) + parseInt(datos.B));    
  }

  const resta = () => {
    setSol(parseInt(datos.A) - parseInt(datos.B));    
  }

  const multiplicar = () => {
    setSol(parseInt(datos.A) * parseInt(datos.B));    
  }
  const dividir = () => {
    setSol(parseInt(datos.A) / parseInt(datos.B));    
  }
  

  return (
    <div className="App">
      <header className="App-header">
      <Wrapper>
            <h1>Esta es mi calculadora</h1>
            
            
            
            <div>
              <div>
                  <div >A:</div>
                  <input className = "operator" name="A" type="int" onChange={handleInputChange}></input>
              </div>
              <div>
                  
                  <div >B:</div>
                  <input className = "operator" name="B" type="int" onChange={handleInputChange}></input>
              </div>
            </div>
            <div>
              <button class="operation" onClick={suma}>A+B</button>
              <button class="operation" onClick={resta}>A-B</button>
              <button class="operation" onClick={multiplicar}>A*B</button>
              <button class="operation" onClick={dividir}>A/B</button>
            </div>
            
            <Solution solution = {solution}></Solution>
          </Wrapper>
      </header>
    </div>
  );
}

export default App;
