
import React from 'react'
import { useDrag } from 'react-dnd'


interface firstObject{id: number,name:string}


export const FirstCard = (props:{ firstObject:firstObject,draggable:boolean}) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'pet',
        item: {id:props.firstObject.id,name:props.firstObject.name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className='pet-card' ref={dragRef}>
            {props.firstObject.name}
            {isDragging && '😱'}
        </div>
    )
}