import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  isAuthenticated: localStorage.getItem("dbUser") ? true : false,
  user: localStorage.getItem("dbUser")
    ? JSON.parse(localStorage.getItem("dbUser"))
    : "",
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("dbUser");
      localStorage.removeItem("dbUserTransactions");
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action.payload);

      localStorage.setItem("dbUser", JSON.stringify(action.payload.data.user));
      localStorage.setItem("token", action.payload.token);
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      state.token = action.payload.token;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      alert(action.payload);
    });

    // register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      alert(action.payload);
    });

    // get user details
    // builder.addCase(getUserDetails.pending, (state) => {
    //     state.loading = true;
    // })
    // builder.addCase(getUserDetails.fulfilled, (state, action) => {
    //     state.user.balance = action.payload.balance;
    //     state.user.beneficiaries = action.payload.beneficiaries;
    //     state.user.accountNumber = action.payload.accountNumber;
    //     state.user.transactionPassword = action.payload.transactionPassword;
    //     const user = {
    //         loginId: state.user.loginId,
    //         balance: action.payload.balance,
    //         beneficiaries: action.payload.beneficiaries,
    //         transactionPassword: action.payload.transactionPassword,
    //         accountNumber: action.payload.accountNumber,
    //         loginTime: localStorage.getItem('dbUser') ? JSON.parse(localStorage.getItem('dbUser')).loginTime : new Date().toLocaleString('en-US'),
    //     }
    //     localStorage.setItem('dbUser', JSON.stringify(user))
    //     state.loading = false;
    // })
    // builder.addCase(getUserDetails.rejected, (state, action) => {
    //     state.loading = false;
    //     alert(action.payload)
    // })
  },
});

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/v1/users/login",
        userData
      );

      // console.log(response);
      // const userDetails = jwt_decode(response.data);

      // return userDetails;
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/v1/users/signup",
        userData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export default authSlice;
