import React from 'react';
import DrumToggle from './DrumToggle';

export default function Drum(props) {
    var toogleArray = [false, false, false, false, false,false,false, false ];
    return (
        <div className="row">
            {toogleArray.map(( bool , i ) => (<DrumToggle
                    key={i}
                    drum={props.drum}
                    isPlaying={bool}
                    color={props.color}
                    index={i}
                    note={props.note}
                    timerIndex={props.timerIndex}
                    />))}
        </div>
    )
}
