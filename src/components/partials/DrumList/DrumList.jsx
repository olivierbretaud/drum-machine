import React from 'react';
import DrumRow from '../DrumRow/DrumRow';
import './DrumList.scss';

export default function DrumList({ list , timerIndex , now , sampler }) {
  return (
    <>
      {list.map(( category , i) => {
        return (
          <div key={"category" + i }className="category">
            <div className="name" 
              style={{ color: category.color}}>{category.name}</div>
              {category.list.map((note ,i) => {
                if (note.isActive) {
                  return <DrumRow key={category.name + i} now={now} drum={sampler} timerIndex={timerIndex} note={note.note} color={category.color}/>
                }
                return null 
              })}
          </div>
        )
      })}
      
    </>
  )
}
