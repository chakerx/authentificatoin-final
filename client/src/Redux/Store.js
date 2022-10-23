import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'


export const Store = configureStore({
    reducer:{
        User : UserReducer
    }
})

//na3mel store bach ye5dmouli el  isloading wel jma3a li m3ah wnajem nchoufjom
//wnemchi norbta bel index.js bach ye5demli store li sna3ta hadha