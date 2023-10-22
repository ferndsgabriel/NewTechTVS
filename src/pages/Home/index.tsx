import React,{useRef, useEffect} from "react";
import Header from "../../components/Header";
import tv from "../../assets/tv.png";
import gif from "../../assets/tv_animate.gif";
import hand from "../../assets/hand.png";
import serv1 from "../../assets/serv1.png";
import serv2 from "../../assets/serv2.png";
import serv3 from "../../assets/serv3.png";
import mainlogo from "../../assets/logomain.png";
import {AiOutlineRight, AiOutlineLeft,AiFillStar, AiFillInstagram,
    AiFillFacebook, AiTwotoneMail} from 'react-icons/ai';
import { feedbacks } from "../../api";
import {IoLogoWhatsapp} from "react-icons/io";
import ScrollReveal from "scrollreveal";


function Home(){
    const quality = useRef<HTMLDivElement>(null);
    const services = useRef<HTMLDivElement>(null);
    const feedbacksClients = useRef<HTMLDivElement>(null);

    function scrollQuality(value:number){
        if (quality.current !== null){
            quality.current.scrollBy({
                behavior:"smooth",
                top:0,
                left:value
            })
        }
    }

    function scrollServices(value:number){
        if (services.current !== null){
            services.current.scrollBy({
                behavior:"smooth",
                top:0,
                left:value
            })
        }
    }

    useEffect(() => {
        const sr = ScrollReveal({
                reset: true,
        });
        sr.reveal('.scrollReveal', {
            duration: 1500,

        });
    }, []);

    function clientsFeedbacks(value:number){
        if (feedbacksClients.current !== null){
            feedbacksClients.current.scrollBy({
                behavior:"smooth",
                top:0,
                left:value
            })
        }
    }


    return(
        <>
        <Header/>
            <main className="py-12 w-full flex flex-col gap-14">
                <section className="w-full flex flex-row px-4 md:items-center max-w-5xl mx-auto gap-8 scrollReveal">
                    <div className="flex flex-col gap-4 flex-1">
                        <span className="uppercase text-xs text-neutral-400 font-bold">new tech tvs</span>
                        <h1 className="text-2xl max-w-xs font-medium ">
                            Ta precisando de uma força com a sua TV?
                        </h1> 
                        <p className="max-w-xs">
                        O dispositivo parou de ligar, não emite som, não exibe imagem, tem a tela quebrada
                        e apresenta outros problemas.
                        </p>
                        <a className="bg-main self-start text-white font-medium px-4 py-3 rounded
                        hover:scale-105 duration-300">
                            Orçamento grátis
                        </a>
                    </div>
                    <div className="hidden flex-1 md:flex group">
                        <img src={tv} alt="foto de TV group:hover:hidden"
                        className="group-hover:hidden"/>
                        <img src={gif} alt="foto de TV"
                        className="hidden group-hover:block"/>
                    </div>
                </section>
                {/*--------------- */}
                <section className="px-4 w-full max-w-5xl mx-auto md:bg-neutral-100 md:p-4 md:rounded relative scrollReveal">
                    <div className="relative w-full">
                        <div className="flex gap-8 overflow-y-auto w-full scroll" ref={quality}>
                            <div className="flex flex-col gap-4 flex-shrink-0 md:flex-shrink md:flex-1">
                                <h2 className="text-lg font-medium">
                                    Reparos avançados
                                </h2>
                                <p className="max-w-xs text-sm">
                                    Na NewTech, realizamos análises minuciosas de cada peça e oferecemos soluções de reparo que abrangem desde os procedimentos mais simples até os mais avançados.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 flex-shrink-0 md:flex-shrink md:flex-1">
                                <h2 className="text-lg font-medium">
                                    Técnicos especializados
                                </h2>
                                <p className="max-w-xs text-sm">
                                    Nossos técnicos acumulam anos de experiência em reparos e manutenção.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 flex-shrink-0 md:flex-shrink md:flex-1">
                                <h2 className="text-lg font-medium">
                                    Certificados 
                                </h2>
                                <p className="max-w-xs text-sm">
                                    Nossos técnicos têm formação técnica, o que lhes permite aprender com renomados profissionais da área.
                                </p>
                            </div>      
                        </div>

                        <img src={hand}
                            className=" absolute w-10 aspect-auto top-1/2 -translate-y-1/2 right-8
                            animate-hand opacity-0 md:hidden"/>

                        <button className="bg-black p-2 absolute text-white rounded-full opacity-10
                            top-1/2 -translate-y-1/2 left-0.5 md:hidden" onClick={()=>scrollQuality(-200)}>
                                <AiOutlineLeft/>
                        </button>

                        <button className="bg-black p-2 absolute text-white rounded-full opacity-10
                            top-1/2 -translate-y-1/2 right-0.5 md:hidden" onClick={()=>scrollQuality(200)}>
                                <AiOutlineRight/>
                        </button>

                    </div>


                </section>
                {/*----------------------------*/}
                <section className="w-full px-4 flex flex-col gap-6 max-w-5xl mx-auto scrollReveal">
                    <h2 className="text-xl font-medium uppercase">
                        Serviços realizados 
                    </h2>
                    <div className="relative w-full">
                        <div className="flex flex-row gap-8 overflow-auto scroll" ref={services}>
                            <div className="flex flex-col gap-4 flex-shrink-0 md:flex-1 md:flex-shrink">
                                <p className="max-w-xs">
                                Oferecemos serviços de manutenção para TVs,
                                computadores e smartphones.
                                </p>
                                <img src={serv1} alt="serviço 1"
                                className="w-80 aspect-square rounded-md hover:scale-90 duration-300"/>
                            </div>

                            <div className="flex flex-col gap-4 flex-shrink-0 md:flex-1 md:flex-shrink">
                                <p className="max-w-xs">
                                Efetuamos a retirada e a entrega do seu produto diretamente
                                na sua residência.
                                </p>
                                <img src={serv2} alt="serviço 2"
                                className="w-80 aspect-square rounded-md hover:scale-90 duration-300"/>
                            </div>

                            <div className="flex flex-col gap-4 flex-shrink-0 md:flex-1 md:flex-shrink">
                                <p className="max-w-xs">
                                Peças para TVs, computadores e smartphones disponíveis 
                                para venda. 
                                </p>
                                <img src={serv3} alt="serviço 3"
                                className="w-80 aspect-square rounded-md hover:scale-90 duration-300"/>
                            </div>
                        </div>

                        <img src={hand}
                            className=" absolute w-10 aspect-auto top-1/2 -translate-y-1/2 right-8
                            animate-hand opacity-0 md:hidden"/>

                        <button className="bg-black p-2 absolute text-white rounded-full opacity-10
                            top-1/2 -translate-y-1/2 left-0.5 md:hidden" onClick={()=>scrollServices(-200)}>
                            <AiOutlineLeft/>
                        </button>

                        <button className="bg-black p-2 absolute text-white rounded-full opacity-10
                            top-1/2 -translate-y-1/2 right-0.5 md:hidden"onClick={()=>scrollServices(200)}>
                                <AiOutlineRight/>
                        </button>
                    </div>
                    

                </section>
                {/*----------------------------*/}
                <section className="w-full px-4 flex flex-col gap-6 max-w-5xl mx-auto scrollReveal">
                    <h2 className="text-xl font-medium uppercase">
                        Quem somos?
                    </h2>
                    <div className="flex flex-col gap-3 w-4/5 line leading-7 md:w-3/5">
                        <p>
                            A <strong>NewTech TVs</strong> é uma assistência técnica especializada em TVs, computadores e smartphones, fundada por Matheus e Mikael no ano de 2021. Nossa empresa se destaca como referência em reparos, abrangendo desde os problemas mais simples até os mais complexos. Na NewTech, priorizamos a qualidade e a agilidade em todos os nossos serviços.
                        </p>
                        <p>
                        Nossos técnicos são profissionais qualificados, com cursos, amplo conhecimento e habilidades para realizar reparos de alta qualidade. Estamos comprometidos em fornecer soluções eficazes e seguras para todos os seus dispositivos eletrônicos. Conte conosco para um atendimento de excelência e serviços confiáveis.
                        </p>
                    </div>
                    <img src={mainlogo} alt="logo new tech tvs"
                    className="w-56 mt-4"/>
                </section>
                {/*----------------------------*/}
                <section className="flex flex-col max-w-5xl mx-auto w-full px-4 gap-8">

                    <iframe className="aspect-square rounded-md w-full shadow-xl max-w-2xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.867386460687!2d-46.644031625063114!3d-23.53727166070686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce595c8fdd717d%3A0x818cf3f53103434f!2sNewTech%20TVs!5e0!3m2!1sen!2sbr!4v1697923276571!5m2!1sen!2sbr">
                    </iframe>
                    <div className="flex flex-row gap-4">
                        <a className="bg-main self-start text-white font-medium px-4 py-3 rounded
                        hover:scale-105 duration-300" href="https://www.google.com/maps/dir//new+tech+tvs/@-23.467337,-46.7816705,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce595c8fdd717d:0x818cf3f53103434f!2m2!1d-46.6414567!2d-23.5372766?entry=ttu"
                        target="_blank">
                            Como chegar
                        </a>

                        <a className="bg-main self-start text-white font-medium px-4 py-3 rounded
                        hover:scale-105 duration-300"href="tel:+(11)96920-5393">
                            Fazer ligação
                        </a>
                    </div>
                </section>

                {/*----------------------------*/}
                <article className="flex flex-col max-w-5xl mx-auto w-full px-4 gap-6 scrollReveal">
                    <h2 className="text-xl font-medium uppercase">
                        FEEDBACKS
                    </h2>

                    <div className="relative">
                        <div className="flex flex-row gap-4 overflow-auto scroll" ref={feedbacksClients}>
                            {feedbacks.map((item,index)=>{
                                return(
                                    
                                    <div key={index}
                                    className="bg-neutral-100 p-4 flex flex-col gap-4 flex-shrink-0 justify-between rounded hover:scale-90 duration-300">
                                        <span className="text-yellow-400 flex items-center"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
                                        <p className="w-64 text-sm ">"{item.comment}"</p>
                                        <p className="font-medium text-main">- {item.name}</p>
                                    </div>    
                                )
                            })}
                        </div>

                        <button className="bg-black p-2 absolute text-white rounded-full opacity-10
                        top-1/2 -translate-y-1/2 left-0.5" onClick={()=>clientsFeedbacks(-200)}>
                            <AiOutlineLeft/>
                        </button>

                        <button className="bg-black p-2 absolute text-white rounded-full opacity-10
                        top-1/2 -translate-y-1/2 right-0.5" onClick={()=>clientsFeedbacks(200)}>
                            <AiOutlineRight/>
                        </button>
                    </div>  
                    
                    <a className="bg-main self-start text-white font-medium px-4 py-3 rounded
                        hover:scale-105 duration-300"  target="_blank"
                    href="https://www.google.com/maps/place/NewTech+TVs+-+R.+Gen.+Osório,+330+-+Santa+Ifigênia,+São+Paulo+-+SP,+01213-000/@-23.5372766,-46.6414567,17z/data=!4m6!3m5!1s0x94ce595c8fdd717d:0x818cf3f53103434f!8m2!3d-23.5372766!4d-46.6414567!16s%2Fg%2F11rsfdm8kw">
                        Comentar
                    </a>

                    <span className="text-gray-400">Google comentários</span>

                </article>
            </main>

            <footer className="mt-40 w-full bg-main scrollReveal">
                <div className="w-full px-4 py-16 flex flex-col gap-12 max-w-6xl mx-auto">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-6">
                            <p className="text-white text-sm w-4/6 max-w-lg md:text-base">
                                <strong>Endereço:</strong> Rua General Osório, 330 - Santa Ifigênia, São Paulo - SP. 01213-000
                            </p>

                            <p className="text-white text-sm w-4/6 max-w-xs md:text-base">
                                <strong>Contato: </strong>(11) 96920-5393
                            </p>
                            
                            <ul>
                                <a className="text-white flex items-center gap-1 hover:opacity-70 duration-300"
                                href="https://api.whatsapp.com/send?phone=5511969205393&text=" target="_blank">
                                    <IoLogoWhatsapp/>Whatsapp
                                </a>

                                <a className="text-white flex items-center gap-1 hover:opacity-70 duration-300"
                                href="https://www.instagram.com/newtech.tvs/" target="_blank">
                                    <AiFillInstagram/>Instagram
                                </a>

                                <a className="text-white flex items-center gap-1 hover:opacity-70 duration-300"
                                href="https://www.facebook.com/newtechtvs/?locale=ms_MY" target="_blank">
                                    <AiFillFacebook/>Facebook
                                </a>

                                <a className="text-white flex items-center gap-1 hover:opacity-70 duration-300"
                                href="mailto:newtechtvs.adm@gmail.com" target="_blank">
                                    <AiTwotoneMail/>newtechtvs.adm@gmail.com
                                </a>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2 md:items-end md:text-end md:flex-1">
                            
                            <p className="text-white text-sm w-4/6 max-w-xs font-bold md:text-base">
                                Horário de funcionamento
                            </p>
                            <p className="text-white text-sm w-4/6 max-w-xs md:text-base">
                                Seg:  08:00 – 17:00
                            </p>
                            
                            <p className="text-white text-sm w-4/6 max-w-xs md:text-base">
                                Ter:   08:00 – 17:00
                            </p>

                            <p className="text-white text-sm w-4/6 max-w-xs md:text-base">
                                Qua: 08:00 – 17:00
                            </p>

                            <p className="text-white text-sm w-4/6 max-w-xs md:text-base">
                                Qui:   08:00 – 17:00
                            </p>

                            <p className="text-white text-sm w-4/6 max-w-xs md:text-base">       
                                Sex:  08:00 – 17:00
                            </p> 

                            <p className="text-white text-sm w-4/6 max-w-xs md:text-base">   
                                Sáb:  09:00 – 13:00
                            </p> 
                            

                        </div>
                    </div>
                    <p className="text-white text-sm w-4/6 max-w-xs md:text-base opacity-70">
                            &copy;Copyright - 2021 NewTechTVS
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Home;