import React, { useState , useEffect , useRef } from 'react';
import A1 from './assets/sounds/High-Conga-1.wav';
import A2 from './assets/sounds/High-Conga-1.wav';
import A3 from './assets/sounds/Claves.wav';
import A4 from './assets/sounds/Cuica-1.wav';
import A5 from './assets/sounds/Cuica-2.wav';
import A6 from './assets/sounds/High-Timbales.wav';
import A7 from './assets/sounds/Korg-N1R-Castanets.wav';
import B1 from './assets/sounds/Korg-N1R-Long-Guiro.wav';
import B2 from './assets/sounds/Korg-N1R-Low-Bongo.wav';
import B3 from './assets/sounds/Korg-N1R-Maracas.wav';


import Tone from 'tone';
import Drum from './components/partials/Drum';
import './styles/App.scss';

function App() {
  const [ timerIndex , setTimerIndex ] = useState(0);
  const [ isLoaded , setLoaded ]= useState(false)
  var timer = useRef();

  // var BassDrum1 = new Tone.Player({
  //   "url" : drum,
  //   "autostart" : false,
  // }).toMaster();
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
    }, 200);

    return () => clearTimeout(timer.current)

  }, [timerIndex])



  return (
    <div className="App">
      <header className="App-header">
        {isLoaded?
          <>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A2"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A1"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A3"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A4"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A5"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A6"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"A7"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"B1"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"B2"} color={"#c41fc2"}/>
            <Drum drum={sampler.current} timerIndex={timerIndex} note={"B3"} color={"#c41fc2"}/>
          </>
          :
          null
        }
      </header>
    </div>
  );
}

export default App;
