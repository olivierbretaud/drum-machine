
import React, { useState , useEffect , useRef } from 'react';
import Tone from 'tone';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

import { playList , allCategories } from './utils/playlist';
import DrumList from './components/partials/DrumList/DrumList';

function App() {
  const [ timerIndex , setTimerIndex ] = useState(0);
  const [ isLoaded , setLoaded ]= useState(false);
  const [ bpm , setBpm ] = useState(110);
  const [ bpmOnChange , setBpmOnChange ] = useState(110);
  const [ activePlayList , setActivePlayList ] = useState(allCategories);

  var timer = useRef();

  const now = Tone.now();

  const sampler = useRef(
    new Tone.Sampler(
      playList ,
      {
        onload: () => {
          setLoaded(true);
        }
      }
    ).toMaster()
  );

  useEffect(() => {

    timer.current = setTimeout(function(){
      if (timerIndex === 15) {
        setTimerIndex(0)
      } else {
        setTimerIndex(timerIndex + 1)
      }
      sampler.current.releaseAll();
      clearTimeout(timer.current)
    }, 60000 / (bpm * 4 ));

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
            <DrumList
              now={now}
              list={activePlayList}
              sampler={sampler.current}
              timerIndex={timerIndex} />
          </>
          :
          null
        }
        <div style={{ width: '90%' , marginTop: 35 }}>
        <InputRange
          maxValue={200}
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