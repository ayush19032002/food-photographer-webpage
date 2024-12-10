import './App.css';
import { useNavigate } from 'react-router-dom';
import image1 from './image/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2 (1).png';
import image2 from './image/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png'
import image3 from './image/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png'
import { FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Books() {
  const navigate = useNavigate();

  return (
    <>

      <div className='book'>
        <h2 className='text-xl font-light text-center mt-5 p-4'>BOOKS</h2>
      </div>
      <div id='breaks' className='container flex justify-center gap-9 items-center max-[900px]:flex-col pt-5'>
        <div className='break'>
          <h3 className='m-2'>BREAKFASTS</h3>
          <p className='w-96 m-2'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <div className='box flex justify-start gap-9 items-center mt-5 '>
            <h5>40$</h5>
            <button className='paraaa'>Buy Now</button>
          </div>
        </div>
        <img src={image1} />
      </div>
      <div id='breakss' className='container flex justify-center gap-9 items-center max-[900px]:flex-col pt-5'>
        <div className='break'>
          <h3 className='m-2'>SUGAR & SPICE</h3>
          <p className='w-96 m-2'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <div className='box flex justify-start gap-9 items-center mt-5 '>
            <h5>34$</h5>
            <button className='paraaa'>Buy Now</button>
          </div>
        </div>
        <img src={image2} />
      </div>
      <div id='breakss' className='container flex justify-center gap-9 items-center max-[900px]:flex-col pt-5'>
        <div className='break'>
          <h3 className='m-2'>HOLIDAY SEASON SPECIALS</h3>
          <p className='w-96 m-2'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <div className='box flex justify-start gap-9 items-center mt-5 '>
            <h5>25$</h5>
            <button className='paraaa'>Buy Now</button>
          </div>
        </div>
        <img src={image3} />
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

export default Books;
