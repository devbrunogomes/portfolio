import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/root-reducer";


export default configureStore({
  reducer: rootReducer,
})