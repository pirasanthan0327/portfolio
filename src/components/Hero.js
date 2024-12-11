import HeroImg from '../assets/WhatsApp Image 2024-12-10 at 23.30.42_e5e3eb83.jpg';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: 'I’m a full-stack developer and UI/UX designer'
  }

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center items-center">
      {/* Left Side - Text Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-white text-6xl font-hero-font">
          Hi, <br />
          <span className="text-black">Yogaeswaran Pirasanthan</span>
        </h1>
        <p className="text-2xl mt-4">{config.subtitle}</p>

        {/* Social Media Icons */}
        <div className="flex py-10 justify-center md:justify-start">
          <a href="#" className="pr-5 hover:text-white">
            <AiOutlineTwitter size={40} />
          </a>
          <a href="#" className="pr-5 hover:text-white">
            <AiOutlineFacebook size={40} />
          </a>
          <a href="#" className="hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="md:w-1/3 mt-10 md:mt-0">
        <img
          src={HeroImg}
          alt="Hero Image"
          className="w-48 h-48 object-cover rounded-full shadow-xl border-4 border-l-black"
        />
      </div>
    </section>
  );
}
