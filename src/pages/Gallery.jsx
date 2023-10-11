import image1 from '../assets/gallery-1.jpg'
import image2 from '../assets/gallery-2.jpg'
import image3 from '../assets/gallery-3.jpg'
import image4 from '../assets/gallery-4.jpg'
import image5 from '../assets/gallery-5.jpg'
import image6 from '../assets/gallery-6.jpg'
import image7 from '../assets/gallery-7.jpg'

const Gallery = () => {
    return (
        <div className="py-3 px-3 md:px-0 container mx-auto space-y-3 md:space-y-10">
            <h3 className="text-center font-bold text-2xl md:text-5xl">Gallery</h3>
            <div className='h-1 w-20 mx-auto bg-green-950'></div>
            <div className='space-y-3 md:space-y-5'>
                <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
                    <img className='md:w-1/2 col-span-3 rounded-lg' src={image1} alt="" />
                    <img className='md:w-1/2 col-span-3 rounded-lg' src={image2} alt="" />
                </div>
                <div className='flex gap-3 md:gap-5'>
                    <img className='w-2/3 rounded-lg' src={image3} alt="" />
                    <div className='w-1/3 space-y-3 md:space-y-5'>
                        <img className='w-full rounded-lg' src={image4} alt="" />
                        <img className='w-full rounded-lg' src={image5} alt="" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
                    <img className='md:w-1/2 col-span-3 rounded-lg' src={image6} alt="" />
                    <img className='md:w-1/2 col-span-3 rounded-lg' src={image7} alt="" />
                </div>
            </div>
            <p className='text-xl font-light text text-green-950 text-center'>Your Event | Our Duty</p>
        </div>
    );
};

export default Gallery;