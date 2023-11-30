import { configureStore } from "@reduxjs/toolkit";


import  counterSlice  from "./counter/counterSlice";

 const stroe = configureStore({
    reducer: {user:counterSlice},
        
})


export default stroe;