import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import TotalCounter from './components/TotalCounter'

const initialCounters =[
  {
    id: 1,
    value:0
  },
  {
    id: 2,
    value:0
  }
]

function App() {
  const [counters,setCounters]=useState(initialCounters)
  const total = counters.reduce((totalValue,current)=>totalValue+current.value,0)
  const handleInc =(id)=>{
    console.log(id)
    const updateCounters = counters.map(counter=>{
      if(counter.id===id){
        return {
          ...counter,
          value: counter.value +1
        }
      } 
      else {return counter} 
    })
    console.log(updateCounters)
    setCounters(updateCounters)
  }
  const handleDec =(id)=>{
    
    const updateCounters = counters.map(counter=>{
      if(counter.id===id){
        return {
          ...counter,
          value: counter.value -1
        }
      }     
      else {return counter} 
      
    })
    setCounters(updateCounters)
  }
  return (
    <>
      {
        counters.map(counter=><Counter handleDec={()=>handleDec(counter.id)} handleInc={()=>handleInc(counter.id)} counter={counter.value} counterObj={counter} key={counter.id}/>)
      }
      <TotalCounter TotalCounter={total}/>
    </>
  )
}

export default App
