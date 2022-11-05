import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllJsons, fetchJsons } from './jsonsSlice'
import JsonItem from './JsonItem'

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
        {jsons.map((json) => (
          <JsonItem key={json.id} json={json} />
        ))}
        </ul>
        
        {console.log(typeof(jsons))}
    </section>
  )
}


export default JsonsList
