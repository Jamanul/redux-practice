import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchPostsData } from "./postApi"

const initialState ={
    isLoading : false,
    isError : false,
    posts :[],
    error : null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts',async ()=>{
    const result = await fetchPostsData()
    return result
}) 

const postsSlice =createSlice({
    name : "posts",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.isError= false
            state.isLoading=true
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading=false
            state.posts=action.payload
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.error=action.error.message
        })
    }
})

export default postsSlice.reducer