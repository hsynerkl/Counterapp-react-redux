import React,{useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {increment,decrement,selectCount,incrementByAmount} from './counterSlice';

export default function Counter() {
    const [amount,setAmount]= useState('2'); 
    const value = useSelector(selectCount);
    const dispatch =useDispatch();

      return (
        <>
         <div>
             <button onClick={()=>dispatch(increment())}>+</button>
             <span>{value}</span>
             <button onClick={()=>dispatch(decrement())}>-</button>
        </div> 
        <div>
            <input
             aria-label="Set increment amount"
             onChange={e=>setAmount(e.target.value )}
            />
            <button onClick={()=>dispatch(incrementByAmount(Number(amount)||0))} >Arttır</button>
            
        </div>
        </>
  )
}
