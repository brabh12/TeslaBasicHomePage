import '../Wallp/Wallpaper.css'
import teslavid from '../../assets/tesla ads.mp4'
import image1 from '../../assets/tesla1.jpg'
import image2 from '../../assets/tesla2.jpg'
import image3 from '../../assets/tesla3.jpg'
const Wallpaper = ({playStatus,heroCount}) => {
  
    if (playStatus) {
        return (
            <video className='background fade-in'autoPlay loop muted>
                <source src={teslavid} type='video/mp4' />
            </video>
        )
    }
    else if(heroCount===0)
    {
        return <img src={image1} className='background fade-in' alt="" />
    }
    else if(heroCount===1)
    {
        return <img src={image2} className='background fade-in' alt="" />
    }
    else if(heroCount===2)
    {
        return <img src={image3} className='background fade-in' alt="" />
    }
}

export default Wallpaper