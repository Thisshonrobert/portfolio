import React from 'react';

function Contact() {
  return (
    <div name="Contact" className='bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 dark:from-black dark:via-black dark:to-gray-800 w-full h-screen'>
      <div className='flex flex-col text-black dark:text-white justify-center mx-auto max-w-screen-lg p-4 w-full h-full'>
        <div className='pb-8 mt-20'>
          <h1 className='border-b-4 inline border-blue-500 dark:border-gray-500 font-bold text-4xl'>Contact</h1>
          <p className='text-xl pt-4 pb-4 text-gray-700 dark:text-gray-400'>Submit the form below to get in touch with me</p>
        </div>

        <div>
          <form action="https://getform.io/f/panvlkpa" method="POST" className='flex flex-col w-full md:w-1/2 mx-auto'>
            <input type='text' name="name" placeholder='Enter your name' 
              className='border-4 border-black dark:border-gray-700 text-black dark:text-white rounded-md focus:outline-none bg-transparent p-2 mb-2'/>
            <input type='text' name="email" placeholder='Enter your email' 
              className='border-4 border-black dark:border-gray-700 text-black dark:text-white rounded-md focus:outline-none bg-transparent p-2 mb-2'/>
            <textarea rows='10' name="message" placeholder='Type your message' 
              className='border-4 border-black dark:border-gray-700 text-black dark:text-white rounded-md focus:outline-none bg-transparent p-2 mb-2'/>
            <button className='bg-gradient-to-r from-yellow-500 to-purple-500 px-6 py-1 mx-auto shadow-md rounded-lg shadow-purple-600 hover:scale-110 duration-300'>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
