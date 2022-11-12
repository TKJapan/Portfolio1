import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
     jsons: [
        {
            id: 0,
            title: "",
            content: "",
            photo: ""
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

//削除

const jsonSlice = createSlice({
    name: 'json',
    initialState,
    reducers: {
        selectJson(state, action){
            state.selectedJson = action.payload
        }
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
    }
})

export default jsonSlice.reducer

export const {selectJson } = jsonSlice.actions

export const selectAllJsons = state => state.jsons.jsons

export const selectJsonById = (state, jsonId) =>
     state.jsons.jsons.find(json => json.id === jsonId)