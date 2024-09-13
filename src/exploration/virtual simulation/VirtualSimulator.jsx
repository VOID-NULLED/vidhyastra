import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const VirtualSimulator = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <div>
        <h2 className='text-black text-4xl text-center m-5 font-bold'>
            Explore {" "}<span className='text-purple-600'>Virtual Stimulator</span>
        </h2>
        <div data-aos="zoom-in" data-aos-duration="3000" className='flex justify-center'>
            <img src="/images/exploration/virtual.png"/>
        </div>
        <div className='flex justify-center'>
        <p className=' text-gray-500 m-8 max-w-2xl'>Our AI-powered career guidance platform offers personalized advice tailored to your unique interests, strengths, and current market trends. With just a few clicks, discover the career paths that align with your potential and passion, making informed decisions for a fulfilling future.</p>
        </div>
    </div>
  )
}

export default VirtualSimulator