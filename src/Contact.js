import './App.css';
import { useNavigate } from 'react-router-dom';
import { FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import image1 from './image/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg'


function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <div className='contact flex justify-center max-[900px]:flex-col max-[900px]:mt-5'>
        <div>
          <img src={image1} className='img1 max-[900px]:w-4/5	max-[900px]:ml-20'  />
        </div>
        <div className='max-[900px]:flex-row max-[900px]:pr-44'>
          <h1 className='text-3xl p-5'>GET IN TOUCH</h1>
          <p className='para1 mb-5 pl-5 font-light'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          <p className=' ml-5 font-light'>Tel: 123-456-7890  |  Email: info@mysite.com</p>
          <div className='name ml-5 pt-2'>
            <div>
              <label className='font-light' for="firstname">First Name*</label>
            </div>
            <div>
              <input type='name' id='firstname' name='firstname' className='names' />
            </div>
            <div>
              <label className='font-light' for="firstname">Last Name*</label>
            </div>
            <div>
              <input type='name' id='lirstname' name='lirstname' className='names' />
            </div>
            <div>
              <label className='font-light' for="firstname">Email*</label>
            </div>
            <div>
              <input type='name' id='email' name='email' className='names' />
            </div>
            <div>
              <label className='font-light' for="firstname">Subject*</label>
            </div>
            <div>
              <input type='name' id='subject' name='subject' className='names' />
            </div>
            <div>
              <label className='font-light' for='message'> Messages*</label>
            </div>
            <div>
              <textarea name="postContent" rows={4} cols={40} className='names' />
            </div>
            <div className='submit'>
              <button>Submit</button>
            </div>
            <div className='pt-5'>
              <p className='font-light'>Stay Up-To-Date with New Posts</p>
              <div>
                <label className='font-light' for="firstname">Email*</label>
              </div>
              <div className='flex gap-2 max-[900px]:flex-col'>
                <input type='name' id='subject' name='subject' className='names' />
                <button className='sub'>Suscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className='container'>
        <div className='icon flex justify-center m-4 gap-9	'>
          <FaPinterestP />
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p className='text-center'>© 2035 by The Art of Food. Powered and secured by Wix</p>
      </div>
    </>
  );
}

export default Contact;
