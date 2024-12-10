import AboutImg from '../assets/rb_899.png'

export default function About () {
const config = {
    line1:'Hi, My name is Pirasanthan. i am a full stack wep developer. i built beutiful wepsites with react.js and tailwind css+Bootstrap ',
    line2:'i am proficient in frontend skill like react.js, redux tool ,css,html,php and many more.',
    line3:'in ui/ux i know figma.'
}


    return <section className='flex flex-col md:flex-row bg-slate-500 px-5  ' id='about'>
        <div className='py-5 md:w-1/2 bg-transparent'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='   text-white flex flex-col justify-center pl-5 pr-5'>
        <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-2 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>{config.line1} </p>
        <p className='pb-5'>
            {config.line2}
        </p>
        <p className='pb-5'>
           {config.line3}
        </p>
        </div>
            
        </div>
    </section>
}