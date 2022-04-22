import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';


function App() {
let maxNumber = 5;
let minNumber = 0;

    let [result, setResult] = useState<number>(minNumber)

    function plusOneFN(result: number) {
        let newResult = result + 1
        if (result < maxNumber)
            setResult(newResult);
    }

    function dropToZero() {
        setResult(minNumber)
    }

    return (
        <div className="App">
            <Counter
                plusOneFN={plusOneFN}
                dropToZero={dropToZero}
                result={result}
                maxNumber={maxNumber}
                minNumber={minNumber}

            />
        </div>
    );
}

export default App;
