import React , { useState , useEffect } from 'react';

export default function DrumToggle(props) {
  const [ isPlaying ,setIsPlaying ] = useState(props.isPlaying)

  useEffect(() => {
    if (isPlaying && props.timerIndex === props.index) {
      props.drum.triggerAttackRelease(props.note)
    }

  });

  return (
    <div className={`button-play ${isPlaying ? "isPlaying" : ""}`}
      style={{
        backgroundColor: isPlaying ? props.color : null,
        opacity: props.timerIndex === props.index ? 1: 0.4 
      }}
      onClick={() => setIsPlaying(!isPlaying)}>
    </div>
  )
};