import React from 'react'
type ControlProps = {
  onUndo: () => void
  onRedo: () => void
  onReset: () => void
  hasCircle: boolean
  hasHistory: boolean
}

function Controls({
  onUndo, 
  onRedo, 
  onReset,
  hasCircle,
  hasHistory
  }: ControlProps) {
  return (
    <div className='controls' onClick={(e) => {
      e.stopPropagation();
    }}>
      <button
        disabled={!hasCircle}
        onClick={onUndo}
      > Undo</button>
      <button 
        disabled={!hasHistory}
        onClick={onRedo}
      >Redo</button>
      <button onClick={onReset}>Reset</button>

    </div>
  )
}

export default Controls