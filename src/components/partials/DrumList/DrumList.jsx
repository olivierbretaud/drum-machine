import React from 'react';
import DrumRow from '../DrumRow/DrumRow';
import './DrumList.scss';

export default function DrumList({ list , timerIndex }) {
  return (
    <>
      {list.map(( category , i) => {
        return (
          <div className="category">
            <div className="name" 
              style={{ color: category.color}}>{category.name}</div>
              {category.list.map((note ,i) => {
                if (note.isActive) {
                  return <DrumRow key={category.name + i} timerIndex={timerIndex} note={note.note} color={category.color}/>
                } 
                return null;
              })}
          </div>
        )
      })}
      
    </>
  )
}