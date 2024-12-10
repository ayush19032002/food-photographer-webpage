import './App.css';
import { useNavigate } from 'react-router-dom';
import { FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import imge from './image/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg'

function About() {
  const navigate = useNavigate();

  return (
    <>

      <div id='contain' className='container flex justify-around gap-9 max-[900px]:flex-col	 items-center'>
        <div className='about'>
          <img src={imge} />
        </div>
        <div className='abouts '>
          <h2 className='m-4 text-4xl font-light	 '>ABOUT JADE</h2>
          <p className='m-4 w-96 font-light'>I'm a paragraph. Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            Feel free to drag and drop me anywhere you like on your page.</p>
          <p className='m-4 w-96 font-light'>This is a great space to write long text about your company and your services.
            You can use this space to go into a little more detail about your company.</p>
          <h2 className='m-4 text-xl '>Education</h2>
          <p className='m-4 w-96 font-light'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <h2 className='m-4 text-xl'>Awards & Nominations</h2>
          <p className='m-4 w-96 font-light'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
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

export default About;
