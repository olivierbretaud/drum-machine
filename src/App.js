import React, { useState , useEffect , useRef } from 'react';
import Tone from 'tone';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

import Drum from './components/partials/Drum';
import './styles/App.scss';

import A1 from './assets/sounds/Clap-1.wav';
import A2 from './assets/sounds/High-Conga-1.wav';
import A3 from './assets/sounds/Claves.wav';
import A4 from './assets/sounds/Cuica-1.wav';
import A5 from './assets/sounds/Cuica-2.wav';
import A6 from './assets/sounds/High-Timbales.wav';
import A7 from './assets/sounds/Korg-N1R-Castanets.wav';
import B1 from './assets/sounds/Korg-N1R-Long-Guiro.wav';
import B2 from './assets/sounds/Korg-N1R-Low-Bongo.wav';
import B3 from './assets/sounds/Korg-N1R-Maracas.wav';


function App() {
  const [ timerIndex , setTimerIndex ] = useState(0);
  const [ isLoaded , setLoaded ]= useState(false);
  const [ bpm , setBpm ] = useState(200);
  const [ bpmOnChange , setBpmOnChange ] = useState(200);
  var timer = useRef();

  const sampler = useRef(
    new Tone.Sampler(
      { A1 , A2 , A3 , A4 , A5 ,A6, A7,  B1 , B2, B3 },
      {
        onload: () => {
          setLoaded(true);
        }
      }
    ).toMaster()
  );

  useEffect(() => {

    timer.current = setTimeout(function(){
      if (timerIndex === 7) {
        setTimerIndex(0)
      } else {
        setTimerIndex(timerIndex + 1)
      }
      clearTimeout(timer.current)
    }, 60000 / bpm );

    return () => clearTimeout(timer.current)

  }, [timerIndex , bpm ])

  useEffect(() => {
    Tone.Master.mute = false;
  },[bpm]);

  function handleChangeBpm(value) {
    Tone.Master.mute = true;
    setBpmOnChange(value)
  } 

  return (
    <div className="App">
      <div className="app-content">
        {isLoaded?
          <>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A2"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A1"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A3"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A4"} color={"#7effc3"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A5"} color={"#7effc3"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A6"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A7"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"B1"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"B2"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"B3"} color={"#c41fc2"}/>
          </>
          :
          null
        }
        <div style={{ width: 348 , marginTop: 35 }}>
        <InputRange
          maxValue={500}
          minValue={40}
          value={bpmOnChange}
          activeTrack={"d-none"}
          maxLabel={"d-none"}
          minLabel={"d-none"}
          formatLabel={value => `${value} bpm`}
          onChangeComplete={() => setBpm(bpmOnChange)}
          onChange={value => handleChangeBpm(value)} />
        </div>
      </div>
    </div>
  );
}

export default App;
