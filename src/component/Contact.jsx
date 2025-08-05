import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [mailStatus, setMailStatus] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hxg6wib', 'template_wda4fsc', form.current, {
        publicKey: '0s41OeypqWww--h3X',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMailStatus(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div name="Contact" className='bg-gradient-to-b from-gray-800 via-black to-black w-full h-screen'>
      <div className='flex flex-col text-white justify-center mx-auto max-w-screen-lg p-4 w-full h-full'>
        <div className='pb-6 mt-6'>
          <h1 className='border-b-4 inline border-gray-500 font-bold text-4xl'>Contact</h1>
          <p className='text-xl pt-4 pb-4 text-gray-400'>Submit the form below to get in touch with me</p>
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2 mx-auto'>
            <input type='text' name="from_name" placeholder='Enter your name' 
              className='border-4 border-gray-700 text-white rounded-md focus:outline-none bg-transparent p-2 mb-2'/>
            <input type='text' name="from_email" placeholder='Enter your email' 
              className='border-4 border-gray-700 text-white rounded-md focus:outline-none bg-transparent p-2 mb-2'/>
            <textarea rows='10' name="message" placeholder='Type your message' 
              className='border-4 border-gray-700 text-white rounded-md focus:outline-none bg-transparent p-2 mb-2'/>
            <button className='bg-gradient-to-r from-yellow-500 to-purple-500 px-6 py-1 mx-auto shadow-md rounded-lg shadow-purple-600 hover:scale-110 duration-300'>
              {mailStatus ? "Email Sent" : "Let's Talk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
