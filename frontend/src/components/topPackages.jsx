import react from 'react';
import arrowRight from '../assets/arrow-right.png';
import Loc1 from '../assets/loc1.jpg'

const topPackages = () =>{
    return(
        <>
        <section>
            <div className=' ml-15 mr-10'>
                <div className='flex items-center gap-2 mt-8'>
                    <h2 className='text-lg font-semibold '>Top Packages</h2>
                    <img src={arrowRight} alt='arrow-right' className='w-5 h-5' /> 
                </div>
                <p className='text-xs mt-2'>These are the top travel packages divulging into the exotic Sri Lanka</p>
            </div>
        </section>
        <section className='ml-15 mr-10'>
                <div className='mt-10 bg-[#f5f5f5]'>
                    <img src={Loc1} alt='Location1' className='w-48 h-38' />
                    <p className='font-semibold mt-2'>Sigiriya</p>
                    <p className='text-xs text-gray-500 mt-1'>12,990 LKR / person</p>
                </div>
        </section>
        </>
    );
}

export default topPackages;