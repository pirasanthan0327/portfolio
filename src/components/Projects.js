import websitteimg1 from '../assets/rb_6805.png'
import websitteimg2 from '../assets/rb_8221.png'
import websitteimg3 from '../assets/rb_115118 (2).png'

export default function Projects() {

    const config = {
        projects :[
            {
                image:'websitteimg1',
                description:'',
                link:''
                
            }

            
        ]
    }


    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white"> 
        <div className="w-full ">
        <div className="flex flex-col px-10 py-10">
        <h1 className='text-4xl border-b-4 border-[#7779b7] mb-2 w-[140px] font-bold'>Projects</h1>
        <p>These are some of my best projects. i have built these with react,mern and vanilla css. check them out   </p>
        </div>
          
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-5 py-5 gap-5 '>
            <div className='relative'>
            <img   className='h-[200px] w-[500px]' src={websitteimg1}/>
            <div className=' project-desc'>
            <p className='text-center px-5 py-5'>A vns service system wepsitr. biilt with react.js and django </p>

            </div>
            </div>
            <div className='relative'>
            <img className='h-[200px] w-[500px]' src={websitteimg2 }/>
            <div className=' project-desc'>
                <p className='text-center px-5 py-5'> A food ordring wepsite. Built with html,css,php  </p>
            </div>
            </div>
            <div className='relative'>
            <img className='h-[200px] w-[500px]' src={websitteimg3}/>
            <div className=' project-desc'>
                <p className='text-center px-5 py-5 '>A travel management system wepsite. built with html,java,javascript,css,php</p>
            </div>
            </div>
        
        
        
        </div>
        
        </div>
    </section>
}