import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const initialState = {
     jsons: [
        {
            id: 0,
            title: "",
            content: "",
            photo: "",
        }
     ],
     selectedJson: {
        id: 0,
        title: "",
        content: "",
        photo: ""
     },
     editedJson: {
        id: 0,
        title: "",
        content: "",
        photo: ""
     },
     status: 'idle',
     error: null
}
const apiUrl = "http://localhost:3004/jsons/"
//リスト
export const fetchJsons = createAsyncThunk('json/get', async() => {
    const response = await axios.get(apiUrl)
    return response.data
})
//新規追加
export const AddJsons = createAsyncThunk('json/post', async(json) => {
    const response = await axios.post(apiUrl, json)
    return response.data
})
//更新
export const EditJson = createAsyncThunk('json/put',async(json) => {
    const response = await axios.put(`http://localhost:3004/jsons/${json.id}/`, json
    )
    return response.data
})
//削除
export const DeleteJson = createAsyncThunk('json/delete',async(id) => {
    await axios.delete(`http://localhost:3004/jsons/${id}/`
    )
    return id
})


const jsonSlice = createSlice({
    name: 'json',
    initialState,
    reducers: {
        selectJson(state, action){
            state.selectedJson = action.payload
        },
        // jsonUpdated(state, action) {
        //     const { id, title, content, photo } = action.payload
        //     const existingJson = state.find(json => json.id === id)
        //     if (existingJson) {
        //         existingJson.title = title
        //         existingJson.content = content
        //         existingJson.photo = photo
        //     }
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJsons.fulfilled,(state, action) => {
            return {
                ...state,
                jsons: action.payload,
            }
        })
        builder.addCase(AddJsons.fulfilled,(state,action)=>{
            return{
                ...state,
                jsons:[action.payload, ...state.jsons],
            }
        })
        builder.addCase(EditJson.fulfilled,(state,action)=>{
            return{
                ...state,
                json:[action.payload, ...state.jsons],
            }
        })
        builder.addCase(DeleteJson.fulfilled,(state,action)=>{
            return{
                ...state,
                json: state.jsons.filter((j) => j.id !== action.payload),
                selectedJson: { id: 0, title: "", content: "", photo: ""}
            }
        })
    }
})

export default jsonSlice.reducer

export const {selectJson} = jsonSlice.actions

export const selectAllJsons = state => state.jsons.jsons

export const selectJsonById = (state, jsonId) =>
     state.jsons.jsons.find(json => json.id === jsonId)