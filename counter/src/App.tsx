import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';


function App() {
    let [result, setResult] = useState(0)

    function plusOneFN(result: number) {
        let newResult = result + 1
        if (result < 5)
            setResult(newResult);
    }

    function dropToZero() {
        setResult(0)
    }

    return (
        <div className="App">
            <Counter
                plusOneFN={plusOneFN}
                dropToZero={dropToZero}
                result={result}/>
        </div>
    );
}

export default App;
