import React, {useState, useRef, useEffect} from "react";
import minilogo from "../../assets/minilogo.svg";
import logo from "../../assets/white.png";
import {AiOutlineMenu, AiOutlineClose, AiFillPhone} from "react-icons/ai";
import {FaLocationArrow} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";


function Header(){
    const navRef = useRef<HTMLDivElement>(null);
    const [buttonNav, setButtonNav] = useState(false);

    function controlNavTranslate(){
        setButtonNav(!buttonNav);         
        if (navRef.current !== null){
            if (navRef.current.classList.contains("translate-x-80")){
                navRef.current.classList.remove("translate-x-80");  
            }
            else{
                navRef.current.classList.add("translate-x-80");
            }
            
        }   
    }

    useEffect(()=>{
        if (navRef.current?.classList.contains("translate-x-80")){
            setButtonNav(false)
        }
    },[window, buttonNav])
    
    return(
        <>
            <header className="bg-main w-full h-20 fixed top-0 z-10 shadow-lg">

                <div className="h-full w-full flex p-4 items-center justify-between max-w-6xl mx-auto">
                    <a href="/">
                        <img src={minilogo} alt="logo versão mobile"
                        className="w-12 md:hidden"/>
                        <img src={logo} alt="logo versão mobile"
                        className="w-36 hidden md:block"/>
                    </a>  
                    <button className="z-40 text-white text-2xl md:hidden" onClick={controlNavTranslate}>
                        {buttonNav?(
                            <AiOutlineClose/>
                        ):(
                            <AiOutlineMenu/>
                        )}
                    </button>

                    <nav className="bg-main fixed h-screen top-0 right-0 w-80 flex items-center justify-end p-4 shadow-2xl translate-x-80 duration-1000 
                    md:translate-x-0 md:static md:h-auto md:w-auto md:p--0 md:shadow-none" 
                    ref={navRef}>

                        <ul className="flex flex-col gap-4 md:flex-row">
                            <li className="text-white font-medium hover:opacity-70 duration-300">
                                <a href="https://api.whatsapp.com/send?phone=5511969205393&text=" target="_blank"
                                className="flex items-center gap-1"><IoLogoWhatsapp/>Whatsapp</a>
                            </li>

                            <li className="text-white font-medium hover:opacity-70 duration-300">
                                <a href="tel:+(11)96920-5393"
                                className="flex items-center gap-1"><AiFillPhone/>Ligar</a>
                            </li>

                            <li className="text-white font-medium hover:opacity-70 duration-300">
                                <a  href="https://www.google.com/maps/dir//new+tech+tvs/@-23.467337,-46.7816705,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce595c8fdd717d:0x818cf3f53103434f!2m2!1d-46.6414567!2d-23.5372766?entry=ttu"
                                target="_blank"
                                className="flex items-center gap-1"><FaLocationArrow/>Localização</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>



            {/* -------------- */}
            <div className="h-20"></div>
        </>
    )
}

export default Header;