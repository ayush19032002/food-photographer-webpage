import './App.css';
import { useNavigate } from 'react-router-dom';
import { FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



function ClientAlbums() {
  const navigate = useNavigate();

  return (
    <>

      <div className='container'>
        <h1 className='text-4xl	font-normal	tracking-widest	 font-light text-center m-5'>CLIENT ALBUMS</h1>
        <div className='img flex justify-around gap-9 max-[900px]:flex-col '>
          <div className='imagess10 max-[900px]:!w-full'>
            <div className='bg-[#000000] hover:bg-opacity-50   bg-opacity-0 w-[100%] h-[100%]'>
              <p className='text-4xl	font-normal'>GREEN EDITORIAL</p>
              <p className=' m-3'>Client: Herbal Magazine</p>
            </div>
          </div>
          <div className='imagess20 max-[900px]:!w-full'>
            <div className='bg-[#000000] hover:bg-opacity-50   bg-opacity-0 w-[100%] h-[100%]'>
              <p className='text-4xl	font-normal'>BREAD BAKING RECEPIES</p>
              <p className=' m-3'>Client: The Baker Blog</p>
            </div>
          </div>
          <div className='imagess30 max-[900px]:!w-full'>
            <div className='bg-[#000000] hover:bg-opacity-50   bg-opacity-0 w-[100%] h-[100%]'>
              <p className='text-4xl	font-normal'>FRENCH COOKBOOK </p>
              <p className=' m-3'>Client: La Peche</p>
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

export default ClientAlbums;
