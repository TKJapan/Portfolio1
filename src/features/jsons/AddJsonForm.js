import React, {useState, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { nanoid} from '@reduxjs/toolkit'

import { AddJsons } from './jsonsSlice'

const AddJsonForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [photo, setPhoto] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onPhotoChanged = e => setPhoto(e.target.value)

    const inputTitle = useRef()
    const inputContent = useRef()
    const inputPhoto = useRef()
  
    const onSaveJsonClicked = () => {
        if (title && content && photo) {
            dispatch(
                AddJsons({
                    id: nanoid(),
                    title,
                    content,
                    photo,
                })
            ) 
        }
    }

    const onClearClicked = () => {
        inputTitle.current.value = ""
        inputContent.current.value = ""
        inputPhoto.current.value = ""
    }

    return (
    <section>
      <h2>Add a New Character</h2>
      <form>
        <input ref={inputTitle} type="text" placeholder='タイトル入力' onChange={onTitleChanged} className="textbox"/>
        <input ref={inputContent} type="text" placeholder='コンテンツ入力' onChange={onContentChanged} className="textbox"/>
        <input ref={inputPhoto} type="text" placeholder='画像のURLを入力' onChange={onPhotoChanged} className="textbox"/>
        <button type="button" onClick={onSaveJsonClicked} className="button">
            Save
        </button>
        <button type="button" onClick={onClearClicked} className="button">
            Clear
        </button>
      </form>
    </section>
  )
}

export default AddJsonForm
