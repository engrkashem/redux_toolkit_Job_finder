import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, editJob, getJobs } from "./jobAPI";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  error: "",
  filterByType: "",
  searchText:"",
  sortOrder:"",
};

// async thunks
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});

export const createJob = createAsyncThunk("jobs/createJob", async (data) => {
  const job = await addJob(data);
  return job;
});

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, data }) => {
    const job = await editJob(id, data);
    return job;
  }
);

export const removeJob = createAsyncThunk("jobs/removeJob", async (id) => {
  const job = await deleteJob(id);
  return job;
});

// create slice
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterByType: (state, action) => {
      state.filterByType = action.payload;
      state.searchText="";
    },
    searchText:(state, action) => {
      state.searchText = action.payload;
      state.filterByType = "";
    },
    sortOrder:(state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(updateJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";

        const indexToUpdate = state.jobs.findIndex(
          (job) => job?.id == action.payload.id
        );

        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = state.jobs.filter(
          (job) => job.id !== Number(action.meta.arg)
        );
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobSlice.reducer;
export const { filterByType, searchText, sortOrder } = jobSlice.actions;
