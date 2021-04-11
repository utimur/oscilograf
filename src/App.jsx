import React, {useState} from 'react';
import Start from "./Start";
import './app.css'
import Choise from "./Choise";
import left_004 from "./assets/left_004.wav";
import left_009 from "./assets/left_009.wav";
import left_014 from "./assets/left_014.wav";
import left_016 from "./assets/left_016.wav";
import right_004 from "./assets/right_004.wav";
import right_009 from "./assets/right_009.wav";
import right_014 from "./assets/right_014.wav";
import right_016 from "./assets/right_016.wav";

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


function App() {
    const [interval, setInterval] = useState('0.16')
    const [isStartPage, setStartPage] = useState(true)
    const [currentTrack, setCurrentTrack] = useState('');

    function runTrack () {
        const audioDirection = Math.random() < 0.5 ? 'left' : 'right'
        const src = audioDirection + "_" + switcher(interval)
        console.log(src)
        setCurrentTrack(src)
        audio.src = tracks[src].track
        audio.load()
        audio.play()
    }

    const start = () => {
        setStartPage(false)
        runTrack()
    }

    if (!isStartPage) {
        return (
            <div>
                <Choise
                    currentTrack={currentTrack}
                    tracks={tracks}
                    runTrack={runTrack}
                    interval={interval}
                    setStartPage={setStartPage}/>
            </div>
        )
    }

    return (
        <div className="app">
                <Start start={start} interval={interval} setInterval={setInterval}/>
        </div>
    );
}

export default App;
