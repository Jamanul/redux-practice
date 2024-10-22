import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import TotalCounter from './components/TotalCounter'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counters/countersSlice'
import Card from './components/Card'



function App() {
  const counters = useSelector((state)=>state.counters)
  const dispatch = useDispatch()
  const total = counters.reduce((totalValue,current)=>totalValue+current.value,0)
  const handleInc =(id)=>{
    dispatch(increment(id))
    
  }
  const handleDec =(id)=>{
    dispatch(decrement(id))
  }
  return (
    <>
      {
        counters.map(counter=><Counter handleDec={()=>handleDec(counter.id)} handleInc={()=>handleInc(counter.id)} counter={counter.value} counterObj={counter} key={counter.id}/>)
      }
      <TotalCounter TotalCounter={total}/>
      <Card/>
    </>
  )
}

export default App
