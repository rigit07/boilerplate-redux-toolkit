import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'general_counter',
  initialState: {
    general_value: 100,
  },
  reducers: {
    toZero: (state) => {
      state.general_value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { toZero } = counterSlice.actions

export default counterSlice.reducer