import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allStates: [],
  listLocations: [],
  editId: "",
  deleteId: "",
  deleteModal: "",
};

const locationSlice = createSlice({
  name: "locations",
  initialState: initialState,
  reducers: {
    setAllStates: (state, action) => {
      state.allStates = action.payload;
    },
    unsetAllStates: (state) => {
      state.allStates = [];
    },
    setListLocations: (state, action) => {
      state.listLocations = action.payload;
    },
    unsetListLocations: (state) => {
      state.listLocations = [];
    },
    setEditLocation: (state, action) => {
      state.editId = action.payload;
    },
    unsetEditLocation: (state) => {
      state.editId = "";
    },
    setDeleteLocation: (state, action) => {
      state.deleteId = action.payload;
      state.deleteModal = true;
    },
    unsetDeleteLocation: (state) => {
      state.deleteId = "";
      state.deleteModal = false;
    },
  },
});

export const {
  setAllStates,
  unsetAllStates,
  setListLocations,
  unsetListLocations,
  setEditLocation,
  unsetEditLocation,
  setDeleteLocation,
  unsetDeleteLocation,
} = locationSlice.actions;
export default locationSlice.reducer;
