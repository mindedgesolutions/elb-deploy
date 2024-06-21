import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalRecords: 0,
  totalPages: 0,
  currentPage: 1,
  changeCount: 0,
  errorTitle: "",
  errorMsg: "",
  errorModal: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    updateCount: (state) => {
      state.changeCount = state.changeCount + 1;
    },
    setTotal: (state, action) => {
      state.totalRecords = action.payload.totalRecords;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
    },
    unsetTotal: (state) => {
      state.totalRecords = 0;
      state.totalPages = 0;
      state.currentPage = 1;
    },
    setErrorModal: (state, action) => {
      state.errorMsg = action.payload.msg;
      state.errorModal = true;
    },
    unsetErrorModal: (state) => {
      state.errorMsg = "";
      state.errorModal = false;
    },
  },
});

export const {
  updateCount,
  setTotal,
  unsetTotal,
  setErrorModal,
  unsetErrorModal,
} = commonSlice.actions;
export default commonSlice.reducer;
