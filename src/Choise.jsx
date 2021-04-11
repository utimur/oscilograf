import React, {useEffect, useState} from 'react';
import Button from "./Button";


const Choise = ({interval, currentTrack, setStartPage, runTrack, tracks}) => {
    const [isSelected, setIsSelected] = useState(false)
    const [isCorrectChoise, setIsCorrectChoise] = useState(false)
    const [leftCount, setLeftCount] = useState(0)
    const [rightCount, setRightCount] = useState(0)
    const [leftFullCount, setLeftFullCount] = useState(0);
    const [rightFullCount, setRightFullCount] = useState(0);



    const selectLeft = () => {
        setIsSelected(true)
        setLeftFullCount(prev => prev + 1)
        if(tracks[currentTrack].direction === 'left') {
            setIsCorrectChoise(true)
            setLeftCount(prev => prev + 1)
        } else {
            setIsCorrectChoise(false)
        }
    }

    const selectRight = () => {
        setIsSelected(true)
        setRightFullCount(prev => prev + 1)
        if(tracks[currentTrack].direction === 'right') {
            setIsCorrectChoise(true)
            setRightCount(prev => prev + 1)
        } else {
            setIsCorrectChoise(false)
        }
    }

    const selectMiddle = () => {
        setLeftFullCount(prev => prev + 1)
        setRightFullCount(prev => prev + 1)
        setIsSelected(true)
        setIsCorrectChoise(false)
    }

    const next = () => {
        setIsSelected(false)
        setTimeout(runTrack, 200)
    }


    return (
        <div className="choise">
            <Button onClick={() => setStartPage(true)} text="Назад"/>
            <h3 style={{marginTop: 10}}>
                Угадано:
            </h3>
            <h4>левым ухом - {leftCount}/{leftFullCount}</h4>
            <h4>правым ухом - {rightCount}/{rightFullCount}</h4>
            <div className="choise__btns">
                <Button color='lightgreen' disabled={isSelected} onClick={selectLeft} className="left" text="Левое"/>
                <Button color="brown" style={{margin: '0 10px'}} disabled={isSelected} onClick={selectMiddle} className="middle" text="Затрудняюсь"/>
                <Button color="lightgreen" disabled={isSelected} onClick={selectRight} className="right" text="Правое"/>
            </div>
            {isSelected && <div className="choise__btns" style={{marginTop: 50}}>
                <Button onClick={next} text="Продлжить"/>
            </div>}
            {isSelected &&
            <h3 style={{
                textAlign: 'center',
                marginTop: 40,
                color: isCorrectChoise ? 'lightgreen' : 'red'
            }}>
                Звук начался с {tracks[currentTrack].direction === 'left' ? 'левого' : 'правого'} наушника с интервалом {interval}
            </h3>
            }
        </div>
    );
};

export default Choise;
