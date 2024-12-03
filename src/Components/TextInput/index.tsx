import React,{FC} from 'react'
import {TextInputProps} from './interface'
import './TextInput.css'
const TextInput:FC<TextInputProps>=({value,onChangeText,placeholder,isMultiline=false})=>{
    return(
<div className={`${ isMultiline?'textareaInput':'inputParentConatiner'} my-3`}>
    
    {!isMultiline&&<input value={value} onChange={onChangeText} placeholder={placeholder}  className='inputParentConatiner' />}

    {isMultiline&&<textarea className='textareaInput' placeholder={placeholder}/>}
</div>
    )
}

export {TextInput}