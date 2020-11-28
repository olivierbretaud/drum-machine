import React  , { useRef } from 'react';
import { Howl , Howler} from 'howler';
import DrumToggle from '../DrumToggle/DrumToggle';
import styles from './DrumRow.module.scss';

export default function DrumRow({ color , timerIndex , note  }) {
  var toogleArray = [false, false, false, false, false,false,false, false , false, false , false,false,false, false , false, false ];

  var sound = useRef(new Howl({
    src: [note],
    html5: true
  }));



  function playSound() {
    // if (sound.current != null) {
    //     sound.current.stop();
    //     sound.current.unload();
    //     sound.current  = null;
    // }
    sound.current.stop();
    sound.current.unload();

    sound.current.play();
  }

  return (
    <div className={styles.row}>
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
