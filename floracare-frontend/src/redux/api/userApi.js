import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../helpers/localStorageMethods";

const baseURL = 'http://localhost:5000/api';

const userLogout = createAsyncThunk("logout", async () => {
    try {
        const token = getLocalStorage('appUserToken');
        const res = await fetch(`${baseURL}/users/logout`,{
            method:"POST",
            headers:{
                'Authorization': `Bearer ${token}`,
                "Content-Type":"application/json"
            },
            credentials:'include'
        });
        return await res.json();
    } catch (err) {
        console.log(`an error in authenticating user:${err}`);
        return { data:null,auth:true }
    }
});

const getUserProfile = createAsyncThunk("userProfile", async () => {
    try {
        const token = getLocalStorage('appUserToken');
        const res = await fetch(`${baseURL}/users/profile`,{
            method:"GET",
            headers:{
                'Authorization': `Bearer ${token}`,
                "Content-Type":"application/json"
            },
            credentials:'include'
        });
        const data = await res.json();
        data.statusCode = res.status;
        return data;
    } catch (err) {
        console.log(`an error in authenticating user:${err}`);
        return { data:{},auth:false};
    }
});

const changeAvatar = createAsyncThunk("changeAvatar", async (data) => {
    try {
        const token = getLocalStorage('appUserToken');
        const res = await fetch(`${baseURL}/user/profile/avatar`,{
            method:"PATCH",
            headers:{
                'Authorization': `Bearer ${token}`,
                // "Content-Type":"application/json"
            },
            credentials:'include',
            body:data
        });
        if(res.status === 201) return await res.json();
        else throw new Error("Server error");
    } catch (err) {
        console.log(`an error in changing user profile pic:${err}`);
        return { avatar:"",authenticate:""};
    }
});

export { userLogout,getUserProfile,changeAvatar };
