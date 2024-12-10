
import HeroImg from  '../assets/rb_3454.png'
import { AiOutlineTwitter ,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
const config = {
  subtitle:'im a full-stack developer and ui/ux designer'
}

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className=' md:w-1/2 flex flex-col'>
        <h1  className=' text-white text-6xl font-hero-font'>Hi, <br/> <span className='text-black'>yogaeswaran pirasanthan</span>
       <p className='text-2xl'>{config.subtitle}<br/></p>
      </h1> 
      <div className='flex py-10' >
        <a href='#'className='pr-5  hover:text-white'><AiOutlineTwitter size={40}/></a>
        <a href='#' className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
        <a href='#' className='hover:text-white' ><AiOutlineLinkedin size={40}/></a>
      </div>
        </div>
       
      <img className= ' md:w-1/3 ' src={HeroImg}/>
    </section>
}