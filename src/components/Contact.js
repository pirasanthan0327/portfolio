import Resumemg from '../assets/rb_2147822979.png';

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col md:flex-row bg-primary px-5 py-32">
      {/* Left Side: Text and Contact Info */}
      <div className="flex flex-col items-center md:items-start text-white md:w-1/2 ">
        {/* Title Section */}
        <h1 className="text-3xl font-bold border-b-4 border-[#2b2d77] mb-6 w-[180px] text-center md:text-left">
          Contact Me
        </h1>

        {/* Intro Text */}
        <p className="text-xl text-center md:text-left mb-8">
          If you want to discuss more in detail, feel free to contact me.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <p className="text-lg">
            <span className="font-semibold">Email:</span> 
            <a href="mailto:pirasanthan0327@gmail.com" className="underline">pirasanthan0327@gmail.com</a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Phone:</span> 
            <a href="tel:+91757850010" className="underline">0757850010</a>
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="mailto:pirasanthan0327@gmail.com"
            className="bg-[#2b7c85] text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex justify-center items-center md:w-1/2 mt-10 md:mt-0">
        <img
          src={Resumemg}
          alt="Contact Image"
          className="w-48 h-48 rounded-full border-4 border-white shadow-xl"
        />
      </div>
    </section>
  );
}
