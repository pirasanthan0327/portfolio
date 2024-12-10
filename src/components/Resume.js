import Resumemg from '../assets/rb_2147822979.png'

export default function Resume () {
    return <section id='resume' className='flex flex-col md:flex-row bg-slate-500 px-5'>
        <div className='py-5 md:w-1/2 bg-transparent flex justify-center md:justify-center'>
            <img className='w-[300px]' src={Resumemg}/>
        </div>
        <div className='md:w-1/2 flex justify-end'>
        <div className='   text-white flex flex-col justify-center pl-5 pr-5'>
        <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-2 w-[140px] font-bold'>Resume</h1>
        <p className='pb-5'> You can view my resume <a className='btn' href='#'>Download</a>  </p>
        
        </div>
            
        </div>
    </section>
}