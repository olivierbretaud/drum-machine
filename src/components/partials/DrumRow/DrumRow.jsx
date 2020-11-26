import React  , { useRef , useEffect } from 'react';
import { Howl } from 'howler';
import DrumToggle from '../DrumToggle/DrumToggle';

export default function DrumRow({ color , timerIndex , note  }) {
  var toogleArray = [false, false, false, false, false,false,false, false , false, false , false,false,false, false , false, false ];

  var sound = useRef();

  function playSound() {
    //check if sound is null, if not stop previous sound and unload it
    if (sound.current != null) {
        sound.current.stop();
        sound.current.unload();
        sound.current  = null;
    }
    sound.current = new Howl({
        src: [note]
    });
    sound.current.play();
  }

  return (
    <div className="row">
        {toogleArray.map(( bool , i ) => (<DrumToggle
          key={i}
          isPlaying={bool}
          color={color}
          index={i}
          play={playSound}
          timerIndex={timerIndex}
          />))}
    </div>
  )
}
