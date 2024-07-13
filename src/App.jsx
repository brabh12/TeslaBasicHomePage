import { useState } from "react"
import Wallpaper from "./Components/Wallp/Wallpaper";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";


const App = () => {
  let heroData = [
    {text1:"Leading the Charge",text2:"in Sustainable Energy"},
    {text1:"Innovation in",text2:"Electric Mobility"},
    {text1:"Driving the Future",text2:"with Clean Energy"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useState(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])
  return (
    <div>
      <Wallpaper playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App