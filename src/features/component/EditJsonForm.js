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
        <h2>Edit Json</h2>
        <form>
            <label htmlFor="postTitle">Charactor Title</label>
            <input
                type="text"
                id="jsonTitle"
                name="jsonTitle"
                placeholder="input"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="postTitle">Charactor Content</label>
            <input
                type="text"
                id="jsonContent"
                name="jsonContent"
                placeholder="input"
                value={content}
                onChange={onContentChanged}
            />
            <label htmlFor="postTitle">Charactor Photo</label>
            <input
                type="text"
                id="jsonPhoto"
                name="jsonPhoto"
                placeholder="input"
                value={photo}
                onChange={onPhotoChanged}
            />
        </form>
        <button type="button" onClick={onSaveJsonClicked}>
            Save
        </button>
    </div>
  )
}

export default EditJsonForm
