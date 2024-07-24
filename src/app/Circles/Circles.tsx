import React from 'react'

type CircleProps = {
    x: number
    y: number
    bgColor: string
    id: number
}

type CircleArrProps = {
    circles: (CircleProps|undefined)[]
}

const Circle = ({
    x,
    y,
    bgColor
}: CircleProps) => {
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

function Circles(props: CircleArrProps ) {
  return (
    props.circles.map(circle => {
        return circle && <Circle key={circle.id} {...circle}></Circle>
    })
  )
}

export default Circles