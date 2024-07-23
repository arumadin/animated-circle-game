'use client'
import React, { useEffect, useState } from 'react';
import Circles from '../Circles/Circles';
import Controls from '../Controls/Controls';
import { COLORS } from '../constants.js';

const getRandomColor = () => {
  const randomIdx = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIdx]
}

function Board() {
    const [circles, setCircles] = useState([]);
    const [history, setHistory] = useState([]);

    const handleClick = (e) => {
        setCircles(prev => {
            return [...prev, 
                {x: e.clientX, 
                y: e.clientY,
                id: +new Date(),
                bgColor: getRandomColor()
              }]
        })
    }

    const handleUndo = () => {
      // remove the last added circle
      const copyCircles = [...circles];
      const lastCircle = copyCircles.pop();

      setHistory(prev => [...prev, lastCircle])
      setCircles(copyCircles)
    }

    const handleRedo = () => {
      // remove last added from history
      // add circles to board
      const copyHistory = [...history];
      const lastCircle = copyHistory.pop();

      setCircles(prev => [...prev, lastCircle])
      setHistory(copyHistory)
    }

    const handleReset = () => {
      setCircles([])
      setHistory([])
    }

  return (
    <div className='board' onClick={handleClick}>
      <Circles circles={circles}></Circles>
      <Controls 
        hasCircle={circles.length > 0}
        hasHistory={history.length > 0}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onReset={handleReset}
      />
      <p className='instruction'>Click anywhere to start adding circles.</p>
    </div>
  )
}

export default Board;