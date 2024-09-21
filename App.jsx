import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {

  let heroData=[
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge into", text2:"your passions"},
    {text1:"Give it in", text2:"to your passions"}
  ]

  const[heroCount,setHeroCount]=useState(2);
  const[playstatus,setPlaystatus]=useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000)
  }, []) //Added ,[] so as to call useEffect only once i.e. in the beginning when webpage is loaded
  
  return (
    <div>
      <Background playStatus={playstatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
      playStatus={playstatus}
      setPlaystatus={setPlaystatus}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      heroData={heroData[heroCount]}
      />
    </div>
  )
}

export default App;

