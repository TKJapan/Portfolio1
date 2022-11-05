import React from 'react'

const JsonItem = ({json}) => {
  return (
    <li className='item'>
        <span className='title'>{json.title}</span>
        <img className="photo" src={json.photo} alt=""/>
    </li>
  )
}

export default JsonItem
