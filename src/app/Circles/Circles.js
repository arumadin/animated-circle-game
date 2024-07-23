import React from 'react'

const Circle = ({
    x,
    y,
    bgColor
}) => {
    return (
        <div
            className='circle'
            style={{
                backgroundColor: bgColor,
                top: `${y - 10}px`,
                left: `${x - 10}px`
            }}
        >

        </div>
    )

}

function Circles({circles}) {
  return (
    circles.map(circle => {
        return <Circle key={circle.id} {...circle}></Circle>
    })
  )
}

export default Circles