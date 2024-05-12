import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    return (
        <div>
            <div className="carousel w-full my-10 z-0 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/hcp6HgT/MRL-web-homepage-banners-1920-659-arts-and-crafts.jpg" className="w-full h-96 rounded-2xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-[60%]'>
                            <h2 className='text-4xl font-bold'>
                                <Typewriter
                                    words={['Affordable Price To Increase Your Collection ', ' ........']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></h2>
                            <p>There are many variations of passages of  available, Now you have to choose your best choice . Its Your term</p>
                            <div>
                                <button className="btn btn-outline btn-success font-extraboldbold"> <Link to='/all-items'>View Art & Craft</Link> </button>
                            </div>
                            <a href="#slide4" className="mr-2 btn btn-neutral">❮</a>
                            <a href="#slide2" className="btn btn-neutral ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/x8r3DM9/p7y0wwmu0cxwjaos3iqhb4s1ygtos1e4iwyddtrrmkqbwzg6dcizupecrv2ajg3w-o.jpg" className="w-full h-96 rounded-2xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-[60%]'>
                            <h2 className='text-4xl font-bold'>
                                <Typewriter
                                    words={['Affordable Price To Increase Your Collection ', ' ........']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></h2>
                            <p>There are many variations of passages of  available, Now you have to choose your best choice . Its Your term</p>
                            <div>
                                <button className="btn btn-outline btn-success font-extraboldbold"> <Link to='/all-items'>View Art & Craft</Link> </button>
                            </div>
                            <a href="#slide1" className="mr-2 btn btn-neutral">❮</a>
                            <a href="#slide3" className="btn btn-neutral ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/7VFQcpT/th.jpg" className="w-full h-96 rounded-2xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-[60%]'>
                            <h2 className='text-4xl font-bold'>
                                <Typewriter
                                    words={['Affordable Price To Increase Your Collection ', ' ........']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></h2>
                            <p>There are many variations of passages of  available, Now you have to choose your best choice . Its Your term</p>
                            <div>
                                <button className="btn btn-outline btn-success font-extraboldbold"> <Link to='/all-items'>View Art & Craft</Link> </button>
                            </div>
                            <a href="#slide2" className="mr-2 btn btn-neutral">❮</a>
                            <a href="#slide4" className="btn btn-neutral ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ThnT7F4/02.webp" className="w-full h-96 rounded-2xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-[60%]'>
                            <h2 className='text-4xl font-bold'>
                                <Typewriter
                                    words={['Affordable Price To Increase Your Collection ', ' ........']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></h2>
                            <p>There are many variations of passages of  available, Now you have to choose your best choice . Its Your term</p>
                            <div>
                                <button className="btn btn-outline btn-success font-extraboldbold"> <Link to='/all-items'>View Art & Craft</Link> </button>
                            </div>
                            <a href="#slide3" className="mr-2 btn btn-neutral">❮</a>
                            <a href="#slide1" className="btn btn-neutral ">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;