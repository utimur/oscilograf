import React, {useEffect, useState} from 'react';
import left_004 from './assets/left_004.wav'
import left_009 from './assets/left_009.wav'
import left_014 from './assets/left_014.wav'
import left_016 from './assets/left_016.wav'
import right_004 from './assets/right_004.wav'
import right_009 from './assets/right_009.wav'
import right_014 from './assets/right_014.wav'
import right_016 from './assets/right_016.wav'
import Button from "./Button";

const audio = new Audio()

const switcher = (inter) => {
    switch (inter) {
        case '0.04':
            return '004'
        case '0.09':
            return '009'
        case '0.14':
            return '014'
        case '0.16':
            return '016'
    }
}

const tracks = {
    left_004: {
        track: left_004,
        direction: 'left'
    },
    left_009: {
        track: left_009,
        direction: 'left'
    },
    left_014: {
        track: left_014,
        direction: 'left'
    },
    left_016: {
        track: left_016,
        direction: 'left'
    },
    right_004: {
        track: right_004,
        direction: 'right'
    },
    right_009: {
        track: right_009,
        direction: 'right'
    },
    right_014: {
        track: right_014,
        direction: 'right'
    },
    right_016: {
        track: right_016,
        direction: 'right'
    },
}

const Choise = ({interval, setStartPage}) => {
    const [isSelected, setIsSelected] = useState(false)
    const [currentTrack, setCurrentTrack] = useState('');
    const [isCorrectChoise, setIsCorrectChoise] = useState(false)
    const [leftCount, setLeftCount] = useState(0)
    const [rightCount, setRightCount] = useState(0)
    const [leftFullCount, setLeftFullCount] = useState(0);
    const [rightFullCount, setRightFullCount] = useState(0);

    useEffect(() => {
      runTrack()
    }, [])

    function runTrack () {
        const audioDirection = Math.random() < 0.5 ? 'left' : 'right'
        const src = audioDirection + "_" + switcher(interval)
        console.log(src)
        setCurrentTrack(src)
        audio.src = tracks[src].track
        audio.load()
        audio.play()
    }

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
