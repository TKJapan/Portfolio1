import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { EditJson } from '../jsons/jsonsSlice'

const EditJsonForm = ({match}) => {
    const { jsonId } = match.params
    console.log("match jsonId",jsonId)

    const json = useSelector(state =>
        state.jsons.jsons.find((j) => j.id === jsonId))
        console.log("editjson",json)

    const [title, setTitle] = useState(json.title)
    const [content, setContent] = useState(json.content)
    const [photo, setPhoto] = useState(json.photo)

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onPhotoChanged = e => setPhoto(e.target.value)

    const onSaveJsonClicked = () => {
        if (title && content && photo) {
            dispatch(EditJson({ id: jsonId, title, content, photo }))
            history.push(`/description/${jsonId}`)
        }
    }

  return (
    <div>
        <h2 className='m-5 text-3xl'>Edit Json</h2>
        <form className='ml-5 bg-amber-100 w-3/5'>
            <label className="ml-5 text-xl" htmlFor="postTitle">Charactor Title</label>
            <input
                type="text"
                id="jsonTitle"
                name="jsonTitle"
                placeholder="input"
                value={title}
                onChange={onTitleChanged}
                className="rounded m-5 border-4 border-indigo-500/100 mx-2"
            />
            <br />
            <label className="ml-5 text-xl" htmlFor="postTitle">Charactor Content</label>
            <input
                type="text"
                id="jsonContent"
                name="jsonContent"
                placeholder="input"
                value={content}
                onChange={onContentChanged}
                className="rounded m-5 border-4 border-indigo-500/100 mx-2"
            />
            <br />
            <label className="ml-5 text-xl" htmlFor="postTitle">Charactor Photo</label>
            <input
                type="text"
                id="jsonPhoto"
                name="jsonPhoto"
                placeholder="input"
                value={photo}
                onChange={onPhotoChanged}
                className="w-3/5 rounded m-5 border-4 border-indigo-500/100 mx-2"
            />
        </form>
        <button type="button" onClick={onSaveJsonClicked}
        className="ml-5 mt-5 bg-yellow-300 rounded border-solid border-2 border-lime-600 mx-1 pl-1 pr-1">
            Save
        </button>
    </div>
  )
}

export default EditJsonForm
