import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  isShowStart: true
}

export const showStartSlice = createSlice({
  initialState,
  name: "showStartState",
  reducers: {
    hideStart: (state) => {
      state.isShowStart = false
    },
    showStart: (state) => {
      state.isShowStart = true
    }

  }
})

export const { hideStart, showStart } = showStartSlice.actions