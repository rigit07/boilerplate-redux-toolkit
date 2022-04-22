import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { asyncFn } from '../api'

export const multipleAsync = createAsyncThunk('some_counter/multipleAsync', 
(amount) => asyncFn(amount))

export const counterSlice = createSlice({
  name: 'some_counter',
  initialState: {
    value: 1,
    my_value: {
      group_1:{
        some_value: 4,
        group_2:{
          some_value: 3,
          group_4:{
            here_is_a_value: 2
          }
        }
      }
    },
    some_value: 0,
  },
  reducers: {
    multiple_2: (state) => {
      state.value *= 2
    },
    multiple_3: (state) => {
      state.value *= 3
    },
    multiple_custom: (state, action) => {
      state.value *= action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(multipleAsync.fulfilled, (state, action) => {
      state.my_value.group_1[action.payload.nested_group].group_4.here_is_a_value *= action.payload.target_value
    })
  }
  
})

// Action creators are generated for each case reducer function
export const { multiple_2, multiple_3, multiple_custom } = counterSlice.actions

export default counterSlice.reducer