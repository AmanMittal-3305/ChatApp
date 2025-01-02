import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";

const initialState = {
  slidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.slidebar.open = !state.slidebar.open;
    },
    updateSidebarType(state, action) {
      state.slidebar.type = action.payload.type;
    },
  },
});

//Reducer
export default slice.reducer;

export function ToggleSidebar () {
    return async () => {
        dispatch(slice.actions.toggleSidebar());
    }
}

export function UpdateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSidebarType({ type }));
    };
}

