import {
    FaLeaf,
    FaHandshake,
    FaShippingFast,
} from "react-icons/fa";
import heroImage from "../assets/hero-bg.png";
import heroImageMobile from "../assets/hero-bg-mobile.png";

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImageMobile}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0 lg:hidden"
      />

       <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0 "
      />

      {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/60 to-transparent z-10"></div>

      {/* Content */}
      <div className="flex flex-col justify-center items-start gap-5 absolute top-[40%] left-[50%]  lg:left-[35%]  transform -translate-x-1/2 -translate-y-1/2 z-20 px-10">

            <h1 className="text-(--text-primary) text-[56px] font-bold leading-[1.1] tracking-tight font-playfair-display">
            Welcome to Merchant Export
            </h1>

         <p className="text-(--muted) text-[20px] font-light leading-normal font-poppins">
          Your trusted partner in international trade
         </p>

         <div className="flex flex-col lg:flex-row justify-start items-center gap-6">

          <button className="bg-(--primary) text-(--secondary) w-50 px-6 py-3 border-2 border-(--primary) rounded-full text-[16px] font-medium hover:bg-(--neutral-light) hover:text-(--text-primary) hover:scale-105 transition duration-300 font-poppins">
            Explore Products
          </button>

          <button className="bg-(--primary) text-(--secondary) w-50 px-6 py-3 border-2 border-(--primary) rounded-full text-[16px] font-medium hover:bg-(--neutral-light) hover:text-(--text-primary) hover:scale-105 transition duration-300 font-poppins">
            Contact Us
          </button>

        </div>

        <div className="flex justify-start items-center gap-20 py-10">
            <div className="flex flex-1 flex-col justify-center items-center gap-3">
                <FaLeaf className="text-(--primary) h-8 w-8"/>
                <p className="text-(--text-primary) text-[14px] font-poppins w-full text-center">Sustainable Sourcing</p>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center gap-3">
                <FaShippingFast className="text-(--primary) h-8 w-8"/>
                <p className="text-(--text-primary) text-[14px] font-poppins w-full text-center">Fast Shipping</p>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center gap-3">
                <FaHandshake className="text-(--primary) h-8 w-8"/>
                <p className="text-(--text-primary) text-[14px] font-poppins w-full text-center">Trusted Partnerships</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;