import toast, { Toaster } from 'react-hot-toast';

const handleSubmit = e => {
    e.preventDefault()

    toast('Feedback Sent',
        {
            style: {
                borderRadius: '30px',
                background: '#052e16',
                color: '#fff',
            },
        }
    );
}

const ContactUs = () => {
    return (
        <div className="py-3 px-3 md:px-0 container mx-auto space-y-3 md:space-y-5 flex flex-col items-center">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h3 className="text-center font-bold text-2xl md:text-5xl">Contact Us!</h3>
            <div className='h-1 w-20 mx-auto bg-green-950'></div>
            <form onSubmit={handleSubmit} className="md:w-2/3 lg:w-1/2 border border-gray-400 md:m-7  p-3 md:p-7 rounded-[32px]">

                <input className="w-full mt-1 mb-2 md:mb-5 border border-gray-400 py-2 px-3 rounded-full outline-none" type="text" name="name" placeholder="Your Name" required />

                <input className="w-full mt-1 mb-2 md:mb-5 border border-gray-400 py-2 px-3 rounded-full outline-none" type="email" name="email" placeholder="Your Email" required />

                <textarea className='w-full rounded-2xl py-2 px-3 border border-gray-400 outline-none' name="message" id="" cols="1000" rows="5" placeholder='Your Message '></textarea>

                <button className="btn rounded-full w-full mt-5 bg-green-950 hover:bg-[#071a07] text-white font-semibold border-none">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;