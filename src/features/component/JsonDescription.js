import { createSelector } from '@reduxjs/toolkit'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DeleteJson } from '../jsons/jsonsSlice'
import styled from 'styled-components'

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

  const [widthValue, setWidthValue] = useState("7")
  const onWidthChange = e => setWidthValue(e.target.value)

  const [heightValue, setHeightValue] = useState("5")
  const onHeightChange = e => setHeightValue(e.target.value)

  const [radiusValue, setRadiusValue] = useState("0")
  const onRadiusChange = e => setRadiusValue(e.target.value)

  const [opacityValue, setOpacityValue] = useState("100")
  const onOpacityChange = e => setOpacityValue(e.target.value)

const Img = styled.img`

width: ${widthValue}em;

height: ${heightValue}em;
 
border-radius: ${radiusValue}em;

border:#ddd 2px solid;

opacity: ${opacityValue}%;
 
 `;

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
          <div className="">
    <label htmlFor="width">写真の長さ</label>
    <input type="range" name="width" id="width" min="3" max="60" defaultValue={widthValue} onChange={onWidthChange}/>
    {widthValue}
  </div>
  <div className="">
    <label htmlFor="height">写真の高さ</label>
    <input type="range" name="height" id="height" min="3" max="50" defaultValue={heightValue} onChange={onHeightChange}/>
    {heightValue}
  </div>
  <div className="">
    <label htmlFor="radius">写真の角丸</label>
    <input type="range" name="radius" id="radius" min="0" max="100" defaultValue={radiusValue} onChange={onRadiusChange}/>
    {radiusValue}
  </div>  
  <div className="">
    <label htmlFor="opacity">写真の透明度</label>
    <input type="range" name="opacity" id="opacity" defaultValue={opacityValue} onChange={onOpacityChange}/>
    {opacityValue}
  </div>


  <br />
          <Img src={json.photo} className="rounded-md ml-10"/>
          <br />
          <Link to={`/editJson/${json.id}`} className="p-2 ml-10 bg-yellow-300 rounded border-solid border-2 border-lime-600 mx-1">更新</Link>
          <button onClick={() => dispatch(DeleteJson(json.id))} className="p-2 ml-10 bg-yellow-300 rounded border-solid border-2 border-lime-600 mx-1">削除</button>
          <Link to={"/"} className="p-2 ml-10 bg-yellow-300 rounded border-solid border-2 border-lime-600 mx-1">一覧</Link>
    </div>
  )
}

export default JsonDescription
