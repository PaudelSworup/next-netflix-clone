
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
const userInfo = typeof window !== "undefined" && sessionStorage.getItem("netflixUser") ? 
 JSON.parse(sessionStorage.getItem("netflixUser") as string) : ""


type AuthState={
    token:string | null ,
    fullname:string | null ,
    email:string | null,
    username:string | null 
}

const initialState = {
    token:userInfo?.token,
    fullname:userInfo?.fullname,
    email:userInfo?.email,
    username:userInfo?.username
} as AuthState



export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut: (state)=>{
        state.email = null
        state.fullname = null
        state.username = null
        state.token = null
        sessionStorage.removeItem("netflixUser");
        },

        logIn:(state,action:PayloadAction<AuthState>)=>{
            state.email = action.payload.email,
            state.token = action.payload.token,
            state.fullname = action.payload.fullname,
            state.username = action.payload.username
            sessionStorage.setItem("netflixUser", JSON.stringify(state));
            // return {
            //     ...state,
            //     ...action.payload,
                
            //   };
        }

        
    }
})


export const {logIn,logOut} = authSlice.actions;
export default authSlice.reducer
