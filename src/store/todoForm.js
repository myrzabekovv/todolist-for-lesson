import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todoForm',
  initialState: {
   form: {
    text: '',
    deadline: ''
   }
  },
  reducers: {
      cahngeField: (state, action) => {
        state.form = {
          ...state.form, 
          [action.payload.name]: action.payload.value
        }
      }
    }
})

export const todoFormAction = todoSlice.actions

export default todoSlice.reducer