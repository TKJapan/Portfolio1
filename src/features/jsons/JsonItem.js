import React from 'react'
import { Link } from 'react-router-dom'

const JsonItem = ({json}) => {
  console.log("jsonitem",json.id)
  
  return (
    <li className='item'>
        <span className='title'>{json.title}</span>
        <img className="photo" src={json.photo} alt=""/>
        <Link to={`/description/${json.id}`}>詳細</Link>
    </li>
  )
}

export default JsonItem
