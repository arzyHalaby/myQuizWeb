import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { FirstCard } from './FirstCard';
import './Basket.css'; 

 const PETS = [
    { id: 1, name: 'dog' },
    { id: 2, name: 'cat' },
    { id: 3, name: 'fish' },
    { id: 4, name: 'hamster' },
]

export const Basket = () => {
 
    const [basket, setBasket] = useState([{ id: 1, name: 'Animals' }])
    const [{ isOver }, dropRef] = useDrop({
        accept: 'pet',
        drop: (item:{id:number, name:string}) => {
            setBasket(!basket.includes(item) ? [...basket, item] : basket)},
        collect: (monitor:any) => ({
            isOver: monitor.isOver()
        })
    }
    )

    return (
        <React.Fragment>
            <div className='first'>
                {PETS.map(firstBasket => <FirstCard  draggable={true} firstObject={firstBasket} />)}
            </div>
            <div className='basket' ref={dropRef}>
                {basket.map(firstBasket => <FirstCard draggable={true} firstObject={firstBasket} />)}
                {isOver && <div>Drop Here!</div>}

            </div>
        </React.Fragment>
    )
}