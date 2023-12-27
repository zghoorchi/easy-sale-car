import { useState } from 'react'
import styles from './SearchBar.module.css'
import { useRouter } from 'next/router'

function SearchBar() {
   const [max,setMax]= useState("")
   const [min,setMin]= useState("")

  const router = useRouter()

  const searchHandler = ()=>{
    if (min && max) {
        router.push(`/filter/${min}/${max}`)
    }else{
      alert("please enter min and max price ...")
    }
   }
  return (
    <div className={styles.container}>
      <div>
        <input type='text'placeholder='Enter min price...' value={min} onChange={(event) => setMin(event.target.value)}/>
        <input type='text'placeholder='Enter max price...' value={max} onChange={(event) => setMax(event.target.value)}/>
      </div>
      <button onClick={searchHandler}>Search</button>
      
    </div>
  )
}

export default SearchBar