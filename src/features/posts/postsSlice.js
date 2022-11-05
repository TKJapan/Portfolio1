import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'Thor', content: 'God of Thunderaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', photo: 'https://d1uzk9o9cg136f.cloudfront.net/f/16782943/rc/2022/06/28/c44856254ba14fed776abba603ffc02476ae4419.jpg'},
    { id: '2', title: 'Loki', content: 'God of Fool', photo: "https://disneyplus.disney.co.jp/content/disney/disneyplus/home/program/loki/_jcr_content/par/textbox_component/textbox_component_par/image_text_1851638074/image1.img.jpg/1622009599517.jpg"}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postSlice.reducer