import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import  axios from 'axios'

export const Register = createAsyncThunk('user/Register',async(newUser,{rejectWithValue})=>{  // l7mra esm el slice wesm el fonction
                                                                     //wel newuser houwa li bach nab3tha
 // consomation mta3 data
    try {
        const {data} = await axios.post('/api/theusers/register',newUser)  //heki l7mra adress li tastet beha fel backend wmwjoda fel server.js
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message ?
          error.response.data.message :  error.response.data.errors)  //hodha messaget mta3 fron end fel controllers(error wel message)
    }
})

export const Login = createAsyncThunk('user/Login',async(user,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/theusers/login',user)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message ?
            error.response.data.message :  error.response.data.errors)
    }
})


const UserSlice =createSlice({
    name:'user',           //esm el slice
    
    initialState:{
        isLoading:false,
        user:JSON.parse(localStorage.getItem('user')),    //namlou heka 5ater n7eb n5arajhom ba3tali fel localstorage !
        Errors:null,                                                                     ///hodha el kol state li t7eb ychoufhom fel redux ba3tali
        isAuth:Boolean(localStorage.getItem('isAuth')),      //namlou heka 5ater n7eb n5arajhom ba3tali fel localstorage !
        token:localStorage.getItem('token')               //namlou heka 5ater n7eb n5arajhom ba3tali fel localstorage !
    },
    // reducers mta3 3afsat sghar mangher panding wel fulfiled ...
    reducers:{
        ClearErrors :(state)=>{
            state.Errors = null             //chnouwa ysir ki nesta3melha
            state.LoginErrors= null
        },
        LogOut : (state)=>{
            localStorage.clear()
            state.isAuth = false             //chnouwa ysir ki nesta3melha
            state.user = {}
            state.token = null
        }
    },

    extraReducers:{
        [Register.pending]:(state)=>{
            state.isLoading = true
        },
        [Register.fulfilled]:(state,{type,payload})=>{
            state.isLoading = false
            state.user = payload.newUser                          // hadha newUser houwa el register li 3malnah fi el frontend li fel controllers
            state.token = payload.token
            state.isAuth = true
            localStorage.setItem('user',JSON.stringify(payload.newUser)) 
            localStorage.setItem('token',JSON.stringify(payload.token))    //bach n7otou el donee hadhi fel localstorage(token user isAuth)
            localStorage.setItem('isAuth',true)   
        },
        [Register.rejected]:(state,{type,payload})=>{
            state.Errors = payload
        },
        [Login.pending]:(state)=>{
            state.isLoading = true
        },
        [Login.fulfilled]:(state,{type,payload})=>{
            state.isLoading = false
            state.user = payload.found
            state.token = payload.token
            state.isAuth = true
            localStorage.setItem('user',JSON.stringify(payload.found))
            localStorage.setItem('token',JSON.stringify(payload.token))
            localStorage.setItem('isAuth',true)
        },
        [Login.rejected]:(state,{type,payload})=>{
            state.LoginErrors = payload
        }

    }


})

export default UserSlice.reducer                              
export const {ClearErrors,LogOut}= UserSlice.actions         //export reducer