import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllJsons, fetchJsons } from './jsonsSlice'
import JsonItem from './JsonItem'
import { Link } from 'react-router-dom'

export const JsonsList = () => {

  const jsons = useSelector(selectAllJsons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchJsonData = async () => {
      await dispatch(fetchJsons())
    }
    fetchJsonData()
  }, [dispatch])

  return (
    <section className='posts-list'>
        <h2>Characters</h2>
        <ul>
        {jsons.map((json, index) => (

          <JsonItem key={index} json={json}/>

        ))}
        </ul>
        
    </section>
  )
}


export default JsonsList
