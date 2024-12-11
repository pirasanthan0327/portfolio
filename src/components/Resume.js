import Resumemg from '../assets/rb_2147822979.png';

export default function Resume() {
    return (
        <section
            id="resume"
            className="flex flex-col md:flex-row bg-gray-100 px-6 py-16 justify-center items-center"
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                    className="w-[280px] md:w-[350px] rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    src={Resumemg}
                    alt="Resume Image"
                />
            </div>

            {/* Resume Information Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <div className="text-center md:text-left text-gray-800 flex flex-col justify-center px-6 md:px-10">
                    <h1 className="text-4xl font-bold text-[#2b2d77] mb-4 border-b-4 border-[#2b2d77] w-fit mx-auto md:mx-0">
                        Resume
                    </h1>
                    <p className="text-lg mb-6">
                        You can view my detailed resume and career history.
                    </p>
                    <a
                        href="RenderCV_sb2nov_Theme__1_ (3).pdf"
                        className="bg-[#2b2d77] text-white text-lg font-semibold py-3 px-8 rounded-md shadow-md hover:bg-[#1f1e5b] transition-all"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
