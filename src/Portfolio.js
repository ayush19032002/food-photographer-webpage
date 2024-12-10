import './App.css';
import { useNavigate } from 'react-router-dom';
import { FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



function Portfolio() {
  const navigate = useNavigate();

  return (
    <>

      <div className='container'>
        <h1 className='text-4xl	font-normal	tracking-widest	 font-light text-center m-5'>PORTFOLIO</h1>
        <div className='img flex gap-9 justify-around max-[900px]:flex-col'>
          <div className='imagess1 max-[900px]:!w-full'>
            <div className='bg-[#000000] hover:bg-opacity-50   bg-opacity-0 w-[100%] h-[100%]'>
              <p className='text-4xl	font-normal'>EDITORIAL</p>
              <button className='paraa m-3'>View More</button>
            </div>
          </div>
          <div className='imagess2 max-[900px]:!w-full'>
            <div className='bg-[#000000] hover:bg-opacity-50   bg-opacity-0 w-[100%] h-[100%]'>
              <p className='text-4xl	font-normal'>FOOD & SERVE</p>
              <button className='paraa m-3'>View More</button>
            </div>
          </div>
          <div className='imagess3 max-[900px]:!w-full'>
            <div className='bg-[#000000] hover:bg-opacity-50   bg-opacity-0 w-[100%] h-[100%]'>
              <p className='text-4xl	font-normal'>BAKED GOODS</p>
              <button className='paraa m-3'>View More</button>
            </div>
          </div>
        </div>
      </div>
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

export default Portfolio;
