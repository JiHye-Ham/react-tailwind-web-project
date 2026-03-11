import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Auth {
  userId: string;
  isLoggedIn: boolean;
}

interface authState {
  auths: Auth
}

const initialState: authState = {
  auths : {
    userId : "", 
    isLoggedIn : false
  }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       isLogin: (state, action:PayloadAction<string>) => {
          state.auths.userId = action.payload;
          state.auths.isLoggedIn = true;
        },
        isLogout: () => {
          return initialState
        }
       },
    },
)

export const { isLogin, isLogout } = authSlice.actions
export default authSlice.reducer