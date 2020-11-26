import React, { useState , useEffect , useRef } from 'react';
import { howler } from 'howler'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

import { allCategories } from './utils/playlist';
import DrumList from './components/partials/DrumList/DrumList';

function App() {
  const [ timerIndex , setTimerIndex ] = useState(0);
  const [ isLoaded , setLoaded ]= useState(false);
  const [ bpm , setBpm ] = useState(110);
  const [ bpmOnChange , setBpmOnChange ] = useState(110);
  // const [ activePlayList , setActivePlayList ] = useState(allCategories);

  var timer = useRef();

  useEffect(() => {

    timer.current = setTimeout(function(){
      if (timerIndex === 15) {
        setTimerIndex(0)
      } else {
        setTimerIndex(timerIndex + 1)
      }
      clearTimeout(timer.current)
    }, 60000 / (bpm * 4));

    return () => clearTimeout(timer.current)

  }, [timerIndex , bpm ])

  function handleChangeBpm(value) {
    setBpmOnChange(value)
  } 

  return (
    <div className="App">
      <div className="app-content">
        <DrumList
          list={allCategories}
          timerIndex={timerIndex} />
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
