import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllJsons, fetchJsons } from './jsonsSlice'
import JsonItem from './JsonItem'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const JsonsList = () => {


const [widthValue, setWidthValue] = useState("0")
const onWidthChange = e => setWidthValue(e.target.value)

const [heightValue, setHeightValue] = useState("0")
const onHeightChange = e => setHeightValue(e.target.value)

const [radiusValue, setRadiusValue] = useState("0")
const onRadiusChange = e => setRadiusValue(e.target.value)

const [colorValue, setColorValue] = useState("#FFFFEE")
const onColorChange = e => setColorValue(e.target.value)

const Box = styled.div`

width: ${widthValue}em;

height: ${heightValue}em;
 
border-radius: ${radiusValue}em;

background: ${colorValue};

border:#ddd 2px solid;

text-align: center;
 
 `;

  const jsons = useSelector(selectAllJsons)
  console.log("selector",jsons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchJsonData = async () => {
      await dispatch(fetchJsons())
    }
    fetchJsonData()
  }, [dispatch])

  return (
  <section className=''>
    <div className="">
  <div className="">
    <label htmlFor="width">ボタンの長さ</label>
    <input type="range" name="width" id="width" min="3" max="60" defaultValue={widthValue} onChange={onWidthChange}/>
    {widthValue}
  </div>
  <div className="">
    <label htmlFor="height">ボタンの高さ</label>
    <input type="range" name="height" id="height" min="3" max="50" defaultValue={heightValue} onChange={onHeightChange}/>
    {heightValue}
  </div>
  <div className="">
    <label htmlFor="radius">ボタンの角丸</label>
    <input type="range" name="radius" id="radius" min="0" max="100" defaultValue={radiusValue} onChange={onRadiusChange}/>
    {radiusValue}
  </div>  
  <div className="">
    <label htmlFor="color">ボタンの色</label>
    <input type="color" name="color" id="color" defaultValue={colorValue} onChange={onColorChange}/>
    {colorValue}
  </div>
  <div className="">
    <div className="" id="box"></div>
  </div>
  <Box>ボタン</Box>
  <br />
  <br />
  </div>
  
        <br />
        <h2 className="text-3xl font-bold">Characters</h2>
        <ul>
        {jsons.map((json, index) => (

          <JsonItem key={index} json={json} className=""/>

        ))}
        </ul>
        
    </section>
  )
}


export default JsonsList
