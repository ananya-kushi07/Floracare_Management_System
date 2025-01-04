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
        state = { ...initialUser, auth: false };
        return state;
      }else {
        if (auth) {
          // console.log(data);
          const { G_id,Experience_level,G_name,Specialization,Phone,email,isAdmin } = data;
          return { ...state, userId: G_id,experience: Experience_level,isAdmin: isAdmin,name: G_name,phone: Phone,specialization: Specialization,email:email, auth: auth }
        } else return { ...state, auth: auth }
      }
    });
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;