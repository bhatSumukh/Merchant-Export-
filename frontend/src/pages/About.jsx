import {
  FaHandshake,
  FaAward,
  FaGlobeAsia,
  FaShippingFast,
} from "react-icons/fa";
import AboutBanner from "../assets/about-b.png";
function About() {
    return (
        <section className="w-full h-auto overflow-hidden bg-(--neutral-light))">
            <div className="w-full h-35 lg:h-40">
                <img
                 src={AboutBanner}
                 className="w-full h-full object-cover overflow-hidden"
                 />
            </div>

            <div className="flex flex-start items-center absolute top-35 lg:left-[45%] left-5 lg:top-40 ">
                <h1 className="text-(--text-primary) text-[40px] font-bold leading-[1.1] tracking-tight font-playfair-display">About us</h1>
            </div>

            <div className="flex flex-col justify-start items-center gap-10  lg:justify-center lg:items-center py-6 px-5 w-full ">
                <h1 className="text-(--text-primary) text-[30px] font-bold leading-[1.1] tracking-tight font-playfair-display text-center w-full lg:w-150  h-20 flex items-center justify-center border-b border-(--primary)">Your Trusted Export Partner</h1>
                <p className="text-(--text-primary) text-[16px] font-normal font-poppins lg:w-8/12 w-full leading-relaxed">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
            <div className="flex flex-col gap-5 justify-center items-center  px-5 w-full lg:flex-row lg:gap-10 lg:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col justify-center items-center  w-full  border-b border-(primary) h-50 hover:translate-y-[-10px] transition duration-300 hover:shadow-lg hover:bg-(--neutral-light)">
                    <div className="flex flex-1 items-center justify-center">
                        <FaHandshake className="text-(--primary) h-20 w-20"/>
                    </div>
                    <div className="flex flex-col flex-1 justify-center items-center ">
                        <h1 className="text-(--text-primary) text-[20px] font-bold leading-[1.1] tracking-tight font-playfair-display text-center w-full  flex items-center justify-center">Trusted Partnership</h1>
                        <p className="text-(--muted) text-[14px] font-poppins text-center">We build lasting relationships based on trust and mutual benefit.</p>
                    </div>
                </div>

               <div className="flex flex-col justify-center items-center  w-full  border-b border-(primary) h-50 hover:translate-y-[-10px] transition duration-300 hover:shadow-lg hover:bg-(--neutral-light)">
                    <div className="flex flex-1 items-center justify-center">
                        <FaAward className="text-(--primary) h-20 w-20"/>
                    </div>
                    <div className="flex flex-col flex-1 justify-center items-center ">
                        <h1 className="text-(--text-primary) text-[20px] font-bold leading-[1.1] tracking-tight font-playfair-display text-center w-full  flex items-center justify-center">Premium Quality Products</h1>
                        <p className="text-(--muted) text-[14px] font-poppins text-center">Delivering carefully sourced products that meet international quality standards.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center  w-full  border-b border-(primary) h-50 hover:translate-y-[-10px] transition duration-300 hover:shadow-lg hover:bg-(--neutral-light)">
                    <div className="flex flex-1 items-center justify-center">
                        <FaGlobeAsia className="text-(--primary) h-20 w-20"/>
                    </div>
                    <div className="flex flex-col flex-1 justify-center items-center ">
                        <h1 className="text-(--text-primary) text-[20px] font-bold leading-[1.1] tracking-tight font-playfair-display text-center w-full  flex items-center justify-center">Global Export Network</h1>
                        <p className="text-(--muted) text-[14px] font-poppins text-center">Connecting businesses worldwide with reliable export and logistics solutions.</p>
                    </div>
                </div>

                 <div className="flex flex-col justify-center items-center  w-full  border-b border-(primary) h-50 hover:translate-y-[-10px] transition duration-300 hover:shadow-lg hover:bg-(--neutral-light)">
                    <div className="flex flex-1 items-center justify-center">
                        <FaShippingFast className="text-(--primary) h-20 w-20"/>
                    </div>
                    <div className="flex flex-col flex-1 justify-center items-center ">
                        <h1 className="text-(--text-primary) text-[20px] font-bold leading-[1.1] tracking-tight font-playfair-display text-center w-full  flex items-center justify-center">Timely & Secure Delivery</h1>
                        <p className="text-(--muted) text-[14px] font-poppins text-center">Ensuring safe, efficient, and on-time product delivery across international markets.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;