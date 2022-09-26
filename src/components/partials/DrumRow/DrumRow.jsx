
import React from 'react';
import { toogleArray } from '../../../utils/playlist';
import DrumToggle from '../DrumToggle/DrumToggle';

export default function DrumRow({ color , timerIndex , note , now , drum }) {
  return (
    <div className="row">
        {toogleArray.map(( bool , i ) => (<DrumToggle
          key={i}
          drum={drum}
          isPlaying={bool}
          color={color}
          index={i}
          note={note}
          now={now}
          timerIndex={timerIndex}
          />))}
    </div>
  )
}