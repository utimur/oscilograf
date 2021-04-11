import React, {useState} from 'react';
import Start from "./Start";
import './app.css'
import Choise from "./Choise";

function App() {
    const [interval, setInterval] = useState('0.16')
    const [isStartPage, setStartPage] = useState(true)

    if (!isStartPage) {
        return (
            <div>
                <Choise interval={interval} setStartPage={setStartPage}/>
            </div>
        )
    }

    return (
        <div className="app">
                <Start setStartPage={setStartPage} interval={interval} setInterval={setInterval}/>
        </div>
    );
}

export default App;
