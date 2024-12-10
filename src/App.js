import './App.css'
import { useNavigate } from 'react-router-dom';
import { FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  const navigate = useNavigate();

  return (
    <>
     
      <div className='container'>
        <div className='images'>
          <h1 className='para m-2 tracking-wider '>THE ART OF FOOD</h1>
          <p>PHOTOGRAPHY</p>
          <button className='paraa m-3'>View More</button>
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

export default App;
