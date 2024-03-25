import { combineReducers } from "@reduxjs/toolkit";
import { languageSlice } from "./LanguageReducer/languageSlice";
import { showStartSlice } from "./LanguageReducer/showStartSlice";


export const rootReducer = combineReducers({
  languageReducer: languageSlice.reducer,
  showStartReducer: showStartSlice.reducer,
});