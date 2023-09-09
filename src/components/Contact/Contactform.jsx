import { useRef } from 'react';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';

const Contactform = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w9dp19a', 'template_lc0ztq5', form.current, 'poNNBm8n6A14ty1Fw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset()
        alert('Email sent successfully')
    };

    return(
        <>
            <div className="bg-white md:p-8 p-4 rounded-lg">
                <h1 className="content-title">Keep in touch</h1>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="my-4">
                        <label className='md:text-gray-800 font-light'>Name</label>
                        <input className="input" type="text" name="name" placeholder="Enter name.." required />
                    </div>
                    <div className="my-4">
                        <label className='md:text-gray-800 font-light'>Email</label>
                        <input className="input" type="email" name="email" placeholder="Enter email.." required />
                    </div>
                    <div className="my-4">
                        <label className='md:text-gray-800 font-light'>Subject</label>
                        <input className="input" type="text" name="subject" placeholder="Enter subject.." required />
                    </div>
                    <div className="my-4">
                        <label className='md:text-gray-800 font-light'>Message</label>
                        <textarea className="px-3 py-2 input" name="message" placeholder="Enter message.." cols="30" rows="5"></textarea>
                    </div>
                    <button className="btn font-medium bg-[#084E7A] w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </>
    );
}
 
export default Contactform;


