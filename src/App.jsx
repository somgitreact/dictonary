import { useState } from 'react'

import './App.css'

function App() {
  const [wordD, setWordD] = useState('')
  const [definition, setDefinition] = useState('')

  const dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]



const searchword = ()=>{
        const result = dictionary.filter((val)=> (val.word).toLowerCase() === wordD.toLowerCase())
        if(result.length){
          console.log(result, result.meaning);
          
setDefinition(result[0].meaning)
        } else {
          setDefinition("Word not found in the dictionary.")
        }
       
        
}


  return (
    <>
      <section id="center">
        <div style={{display:'flex'}}>
        <input type='text' onChange={(e)=>setWordD(e.target.value)} value={wordD} /> <button onClick={searchword}>Search</button>
        </div>
        <div>
          <h3>Definition:</h3> <p>{definition}</p>  {/*  */}
        </div>
      </section>


    </>
  )
}

export default App
