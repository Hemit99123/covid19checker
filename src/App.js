import React, {useState } from 'react';
import './App.css';
import moment from 'moment';
function App() {
    let now = moment().format('MMMM Do YYYY, h:mm a')
    const [results, setResults] = useState('')
    const saveData = () => {
        localStorage.setItem('status', results)
        alert('Saved')
        window.location.reload(true)
    }

    let result = localStorage.getItem('status')

    let pass = "You pass! " + "Date: " + now;
    let fail = "You fail " + "Date: " + now;
   return (
      <div className="App">
        <h1>COVID-19 symptoms</h1>
        <p>Please go through these symptoms and check one box! Press enter to enter the data!</p>
        <ul>
            <li>fever</li>
            <li>cough</li>
            <li>tiredness</li>
            <li>loss of taste or smell</li>
        </ul>
         <input type="radio" name="results" onClick={() => setResults(pass)}></input> I do not have any of these symptoms
         <br />
         <br />
         <input type="radio" name="results" onClick={() => setResults(fail)}></input> I have one or more of these symptoms
         <br />
         <br />
         <button onClick={saveData}>Enter</button>
         <h3>{result}</h3>
         
      </div>
   );
}
export default App;