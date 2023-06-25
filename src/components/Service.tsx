import { useEffect, useState } from 'react'
// import { services } from '../data'
import sanityClient, { urlFor } from '../../sanity.js';
interface Service {
    _id: string;
    title: string;
    short_description: string;
    image: string;
}
const Service = () => {
    const [services, setServices] = useState<Service[]>([])
    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="services"]{
            ...,
          }
        `).then(data => { setServices(data) })
    }, [])
    return (
        <div className="px-4 mx-auto max-w-[1240px] my-12">
            <div className='text-center flex flex-col items-center'>
                <h6 className='font-semibold text-[#4a6cf8]'>What I Offer?</h6>
                <h1 className='font-bold text-[30px] md:text-[40px]'>My Services</h1>
                <p className='text-[#959cb1] max-w-[700px]'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <div className='grid text-center gap-6 my-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
                {services.map((service) => {
                    return (
                        <div key={service._id} className="group duration-200 hover:scale-110 cursor-pointer shadow-md rounded-md leading-[50px] h-[240px] justify-center py-[30px] px-5 flex flex-col items-center">
                            <div className=' bg-[#4a6cf8] text-white border p-3 rounded-full'><img className=' w-[30px] md:w-[40px]' src={urlFor(service.image).url()} alt="" /></div>
                            <h1 className='text-[22px] font-bold '>{service.title}</h1>
                            <p className='text-sm text-[#959cb1] font-semibold'>{service.short_description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service