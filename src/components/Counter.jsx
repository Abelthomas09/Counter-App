  import React, { useState } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { decrement, increment, reset, incrementByAmount } from '../redux/counterSlice'

  const Counter = () => {
      const [amount,setAmount] = useState(0)
      const {count} = useSelector(state=>state.counterReducer)
      const dispatch = useDispatch()

      const handleIncrementAmount = ()=>{
        if(amount){
          //dispatch action
          dispatch(incrementByAmount(+amount))
        }else{
          alert("Please Enter a Valid Amount!!!")
        }
      }

    return (
      <div className="d-flex flex-column align-items-center vh-100 text-white text-center">
        <h1 className='my-5'> Counter App</h1>
        <div className='border border-light p-4 rounded'>
          <div style={{margin: '40px'}}>
            <h1 style={{fontSize:'100px'}}>{count}</h1>
            </div>
          <div className="my-5">
            <button onClick={()=>dispatch(decrement())} className="btn btn-warning mx-5">DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className="btn btn-danger mx-5" >RESET</button>
            <button onClick={()=>dispatch(increment())} className="btn btn-success mx-5">INCREMENT</button>
          </div>
          <div className='d-flex flex-row align-items-center'>
            <input onChange={e=>setAmount(e.target.value)} style={{height:'40px'}} className='form-control mx-3' type="text" placeholder='Enter the amount to be incremented'/>
            <button onClick={handleIncrementAmount} className="btn btn-primary h-75">INCREMENT BY AMOUNT</button>
          </div>
        </div>
      </div>
    )
  }

  export default Counter