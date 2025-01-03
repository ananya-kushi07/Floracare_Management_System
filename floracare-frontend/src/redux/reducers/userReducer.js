import { createSlice } from '@reduxjs/toolkit'
import { getUserProfile, userLogout } from '../api/userApi';
import { clearLocalStorage, setLocalStorage } from '../../helpers/localStorageMethods';

const initialUser = {
  name:"",
  userId:"",
  phone:"",
  experience:"",
  specialization:"",
  isAdmin:false,
  auth: false
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    login: (state, action) => {
      const { token } = action.payload;
      setLocalStorage('appUserToken', token);
      state.auth = true;
    },
    logout: (state) => {
      clearLocalStorage('appUserToken');
      state = { ...initialUser, auth: false };
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state = { ...initialUser, auth: action.payload.auth };
      return state;
    });

    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      const { auth, data, statusCode } = action.payload;
      if (statusCode === 401) {
        clearLocalStorage('appUserToken');
        // clearLocalStorage('notifyToken');
        state = { ...initialUser, auth: false };
        return state;
      }else {
        if (auth) {
          console.log(data);
          
          const { _id, ...rest } = data;
          return { ...state, ...rest, userId: _id, auth: auth }
        } else return { ...state, auth: auth }
      }
    });
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;