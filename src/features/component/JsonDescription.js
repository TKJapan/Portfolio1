import { createSelector } from '@reduxjs/toolkit'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DeleteJson } from '../jsons/jsonsSlice'


const JsonDescription = ({match}) => {
    const { jsonId } = match.params
    console.log("match.params",jsonId)

  const selectjson = useSelector(state => 
    state.jsons.jsons)
    console.log("selectjsons",selectjson)
    
  const json = selectjson.find((j) => j.id === jsonId)
    console.log("find",json)
    console.log("find JsonId",jsonId)

  const history = useHistory()
  const dispatch = useDispatch()

  if(!json) {
    return (
        <section>
            <h2>Data not found</h2>
        </section>
    )
  }
  return (
    <div>
        <h2 className='text-5xl p-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Description</h2>
          <span className='text-3xl p-5'>{json.title}</span>
          <br />
          <img src={json.photo} className="rounded-md ml-10"/>
          <br />
          <Link to={`/editJson/${json.id}`} className="p-2 ml-10 bg-yellow-300 rounded border-solid border-2 border-lime-600 mx-1">更新</Link>
          <button onClick={() => dispatch(DeleteJson(json.id))} className="p-2 ml-10 bg-yellow-300 rounded border-solid border-2 border-lime-600 mx-1">削除</button>
          <Link to={"/"} className="p-2 ml-10 bg-yellow-300 rounded border-solid border-2 border-lime-600 mx-1">一覧</Link>
    </div>
  )
}

export default JsonDescription
