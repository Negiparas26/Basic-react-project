import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "../features/slice";
// for keeping the check of if user is authetic or not
const store = configureStore({
    reducer: {
        auth: authSliceReducer
        //,post: postSlice // need to add another slice, 
        // so that we don't need to do repetative requests to the web Server 
    }
})

export default store;