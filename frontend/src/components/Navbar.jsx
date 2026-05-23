import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className ="w-full sticky top-0 z-50 h-30 bg-(--secondary) ">

            {/* Upper Navbar */}

            <div className="hidden lg:flex h-10 bg-(--primary) justify-between items-center border border-(--primary) ">   
                <div className="flex justify-start gap-4 items-center p-2 w-100 bg-(--secondary) "
                style={{
                    clipPath: "polygon(0 0, 92% 0, 100% 100%, 0 100%)",
                    }}
                >
                    <FaInstagram className="text-muted cursor-pointer h-6 w-6" />
                    <FaFacebookF className="text-muted cursor-pointer h-6 w-6" />
                    <FaLinkedinIn className="text-muted cursor-pointer h-6 w-6"/>
                    <FaTwitter className="text-muted cursor-pointer h-6 w-6"/>
                </div>
                
                <div className="flex justify-end gap-2 items-center px-4 w-full ">
                    <div className="flex items-center gap-2 justify-center px-4">
                    <FaPhoneAlt className="text-(--secondary) cursor-pointer h-4 w-4"/>
                    <p className= "text-(--secondary) text-3.5">+91 1234567890</p>
                    </div>

                    <div className="flex items-center gap-2 justify-center px-4">
                    <FaEnvelope className="text-(--secondary) cursor-pointer h-4 w-4"/>
                    <p className= "text-(--secondary) text-3.5">merchantexport@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Lower Navbar */}

            <div className="w-full h-20 bg-(--secondary) flex justify-between items-center border-2 border-(--primary) ">
                <div className="flex justify-between items-center gap-3 w-full">
                     <div className="flex justify-start items-center lg:h-10 lg:px-10 px-5 py-2 ">
                    <h1 className="flex size-20 font-playfair-display lg:letter-spacing:1.1 w-full text-center items-center">Merchant Export</h1>
                </div>
                <div className="hidden lg:flex justify-end items-center lg:gap-10">
                    <ul className="flex justify-center items-center gap-10 px-20">
                        <li className="hover:text-(--primary) cursor-pointer text-(--text-primary)">Home</li>
                        <li className="hover:text-(--primary) cursor-pointer text-(--text-primary)">About</li>
                        <li className="hover:text-(--primary) cursor-pointer text-(--text-primary)">Products</li>
                        <li className="hover:text-(--primary) cursor-pointer text-(--text-primary)">Contact</li> 
                    </ul>
                </div>
                
                <div className="flex flex-1 lg:hidden justify-end items-center px-10">
                    <button
                        className="text-2xl text-(--text-primary)"
                        onClick={() => setIsOpen(!isOpen)}
                        >
                        {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                </div>
                {
  isOpen && (
    <div className="lg:hidden bg-(--secondary) border-b border-(--primary) w-full absolute top-20 left-0 z-40 transition-all duration-300 ease-in-out">

      <ul className="flex flex-col items-center gap-6 py-6">

        <li className="hover:text-(--primary) cursor-pointer">
          Home
        </li>

        <li className="hover:text-(--primary) cursor-pointer">
          About
        </li>

        <li className="hover:text-(--primary) cursor-pointer">
          Products
        </li>

        <li className="hover:text-(--primary) cursor-pointer">
          Contact
        </li>

      </ul>

    </div>
  )
}
                </div>
                 </div>

                 {/* Mobile Social Icons */}

                 <div className="flex lg:hidden justify-center items-center gap-6 h-10 bg-(--primary) border-t border-(--primary)">
                    <FaInstagram className="text-(--secondary) cursor-pointer h-5 w-5" />
                    <FaFacebookF className="text-(--secondary) cursor-pointer h-5 w-5" />
                    <FaLinkedinIn className="text-(--secondary) cursor-pointer h-5 w-5"/>
                    <FaTwitter className="text-(--secondary) cursor-pointer h-5 w-5"/>
                 </div>
        </nav> 
    )
}

export default Navbar;