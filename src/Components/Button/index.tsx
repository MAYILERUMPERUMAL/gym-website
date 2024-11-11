import React,{FC} from 'react'
import { ButtonProps } from './interface'
import './Button.css'
const Button:FC<ButtonProps>=()=>{
    return (
        <div className='Cony'>
  <div className='ButtonContainer'>
<label>Join</label>
        </div>
        </div>
      
    )
}

export {Button}