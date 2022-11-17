import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllJsons, fetchJsons } from './jsonsSlice'
import JsonItem from './JsonItem'
import { Link } from 'react-router-dom'

export const JsonsList = () => {

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
