import React , { useState , useEffect } from 'react';
import styles from './DrumToggle.module.scss';

export default function DrumToggle({ isPlaying , index , play , color , timerIndex }) {
  const [ isActive , setIsActive ] = useState(isPlaying)
  
  useEffect(() => {
    if (isActive && timerIndex === index) {
      play();
    }
  }, [timerIndex]);

  return (
    <div className={`${styles['button-play']} ${isActive ? styles['is-playing'] : ""}`}
      style={{
        backgroundColor: isActive ? color : null,
        opacity: timerIndex === index ? 1: 0.3 
      }}
      onClick={() => setIsActive(!isActive)}>
    </div>
  )
};