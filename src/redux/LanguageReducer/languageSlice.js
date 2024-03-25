import { createSlice } from "@reduxjs/toolkit";


export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    isEnglish: false
  },
  reducers: {
    toggleLanguage: (state) => {
      state.isEnglish = !state.isEnglish
    },
  }
})


export const { toggleLanguage } = languageSlice.actions