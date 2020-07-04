import React from 'react'
import {MyCar} from './demo'
import { IpcNetConnectOpts } from 'net'

interface IProps{
    car: MyCar
}

export const CarItem: React.FC<IProps> = ({car}) => {
    return (
        <div>
            <h1>{car.color}</h1>
        </div>
    )
}


export default CarItem