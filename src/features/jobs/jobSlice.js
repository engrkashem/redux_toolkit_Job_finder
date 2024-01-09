import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "./jobAPI";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  error: "",
};

// async thunks
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});


// create slice
const jobSlice=createSlice({
    name:'jobs',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchJobs.pending, (state)=>{
            state.isLoading=true;
            state.isError=false;
        })
        .addCase(fetchJobs.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.error="";
            state.jobs=action.payload;
        })
        .addCase(fetchJobs.rejected, (state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.error=action.error?.message;
        })
    }
})

export default jobSlice.reducer;
