import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      console.log("Increment" , state.value)  
      state.value++
    },
    decrement(state) {
        console.log("decrement" , state.value)  
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer