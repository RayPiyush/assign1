import { useState,useMemo } from 'react'
import './App.css'
// function calFact({input}){
//   let ans=1;
//   for(let i=2;i<=input;i++){
//     ans*=i;
//   }
//   return ans;
// }
function App() {
  const [input, setInput] = useState(0);

  //using usememo optimised the application by preventing from unnecessary rerender
  const value=useMemo(()=>
    {
      let ans=1;
      for(let i=2;i<=input;i++){
        ans*=i;
      }
    return ans;
    },
    [input]);
  return (
    <>
      <h1 id='heading'>Factorial Calculator using React Hooks</h1>
      <div id='container'>
      <input type='number' value={input} id='numinput' placeholder='type the number' 
            onChange={(e)=>setInput(Number(e.target.value))}></input>
      {/* <h4>Factorial of {input} is {calFact({input})}</h4> */}
      <h4>Factorial of {input} is {value}</h4>
      </div>

    </>
  )
}

export default App
