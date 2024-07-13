import '../Hero/Hero.css'
import nextBtn from '../../assets/btn.png'
import playBtn from '../../assets/pl.png'
import pauseBtn from '../../assets/p.png'
const Hero = ({heroData, setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className='hero-explore'>
            <p>Explore The New Cars</p>
            <img src={nextBtn} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot black":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot black":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot black":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pauseBtn:playBtn} alt="" />
                <p>Watch Now</p>
            </div>
        </div>
        
    </div>
  )
}

export default Hero