import React from 'react'
import { Link } from 'react-router-dom'

const JsonItem = ({json}) => {
  console.log("jsonitem",json.id)
  
  return (
    <li className='p-6 max-w-md my-3 mx-auto bg-stone-300 rounded-xl shadow-lg items-center space-x-20'>
        <span className='text-2xl'>{json.title}</span>
        <img className="rounded-xl" src={json.photo} alt=""/>
        <Link to={`/description/${json.id}`} className="text-xl">詳細</Link>
    </li>
  )
}

export default JsonItem
