import { createSelector } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

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
  
  if(!json) {
    return (
        <section>
            <h2>Data not found</h2>
        </section>
    )
  }
  return (
    <div>
        <h2>Description</h2>
          {json.title}
          <br />
          <img src={json.photo}/>
          <br />
        <button onClick={()=>history.goBack()}>戻る</button>
    </div>
  )
}

export default JsonDescription