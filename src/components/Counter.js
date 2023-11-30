import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../counter/counterSlice'

 const Counter = () => {
  const count =  useSelector((state) => state.user.value);
  // console.log(useSelector((state)=> state.counter.value));
  const dispatch = useDispatch()

  useEffect((state)=>{
    console.log("MY State", state)
    console.log("ssad", count);
  },[count])

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="increment by number"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          +5
        </button>
      </div>
    </div>
  )
}
export default Counter;