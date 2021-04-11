import React from 'react';
import Button from "./Button";

const Start = ({interval, setInterval, setStartPage}) => {


    function handleOptionChange(e) {
        setInterval(e.target.value)
    }

    return (
        <div className="start">
            <div className="start__intervals">
                <h3 style={{textAlign: 'center', marginBottom: 10}}>Выберите интервал подачи звука</h3>
                <div>
                    <input onChange={handleOptionChange} checked={'0.04' == interval} value={'0.04'} name="interval" id="004" type="radio" />
                    <label htmlFor="004">0.04с</label>
                </div>
                <div>
                    <input onChange={handleOptionChange} checked={'0.09' == interval} value={'0.09'} name="interval" id="009" type="radio" />
                    <label htmlFor="009">0.09с</label>
                </div>
                <div>
                    <input onChange={handleOptionChange} checked={'0.14' == interval} value={'0.14'} name="interval" id="014" type="radio" />
                    <label htmlFor="014">0.14с</label>
                </div>
                <div>
                    <input onChange={handleOptionChange} checked={'0.16' == interval} value={'0.16'} name="interval" id="016" type="radio" />
                    <label htmlFor="016">0.16с</label>
                </div>
            </div>
            <Button style={{marginTop: 15}} onClick={() => setStartPage(false)} text="Начать"/>
        </div>
    );
};

export default Start;
