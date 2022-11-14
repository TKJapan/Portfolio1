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
            inputTitle.current.value = ""
        inputContent.current.value = ""
        inputPhoto.current.value = ""
        }
    }

    const onClearClicked = () => {
        inputTitle.current.value = ""
        inputContent.current.value = ""
        inputPhoto.current.value = ""
    }

    return (
    <section>
      <h2 className='text-2xl p-3'>Add a New Character</h2>
      <form className='bg-stone-300 p-3 rounded'>
        <input ref={inputTitle} type="text" placeholder='タイトル入力' onChange={onTitleChanged} className="border-4 border-indigo-500/100 mx-2"/>
        <input ref={inputContent} type="text" placeholder='コンテンツ入力' onChange={onContentChanged} className="border-4 border-indigo-500/100 mx-2"/>
        <input ref={inputPhoto} type="text" placeholder='画像のURLを入力' onChange={onPhotoChanged} className="border-4 border-indigo-500/100 mx-2"/>
        <button type="button" onClick={onSaveJsonClicked} className="bg-yellow-300 rounded border-solid border-2 border-lime-600 mx-1 pl-1 pr-1">
            Save
        </button>
        <button type="button" onClick={onClearClicked} className="bg-yellow-300 rounded border-solid border-2 border-lime-600 mx-1 pl-1 pr-1">
            Clear
        </button>
      </form>
    </section>
  )
}

export default AddJsonForm
