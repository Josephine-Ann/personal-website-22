import Image from 'next/image'
import React, { useState, useEffect, useContext } from "react"
import Head from 'next/head';
import Navbar from "../Components/Navbar";
import landscapeAbout from "../styles/images/landscapeAbout.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace, faPersonChalkboard, faArrowAltCircleDown, faTimeline, faPalette, faPuzzlePiece, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useThemes } from '../context/themeContext';
import useScrollPosition from '@react-hook/window-scroll'
import { useMouseWheel } from 'react-use';
import Carousel from '../Components/Carousel';

export default function About() {
    const {
        contents,
        // handleScrollBottom,
        handleSetState,
        items,
        scrollClasses,
        carouselClasses
        // handleScrollTop
    } = useThemes()
    const scrollY = useScrollPosition(60 /*frames per second*/);
    let mouseWheel = useMouseWheel()

    const SmallPhotoWrapper = ({ children }) => {
        // let cadena = children.props.src.src
        // let doubleDigits = cadena.substring(20, 33)
        // cadena = cadena.substring(20, 32)
        // ${cadena} ${doubleDigits} ${cadena === "background-3" || cadena === "background-7" || doubleDigits === "background-11" ? "hidden sm:block" : ""} 
        return <div className={`relative pt-[50%] w-[80vw] lan:w-[28vw] tab:w-[38vw] sm:w-[28vw] lan:mx-auto ${items.changeInMotion ? "image-fade-in" : ""}`}>{children}</div>;
    }
    const PhotoWrapper = ({ children }) => {
        return <div className={`border-2 relative pt-[50%] ${items.photo ? "image-larger-down m-auto" : "w-[80vw] h-[40vh] lg:h-[80vh] m-auto"}`}>{children}</div>;
    }

    return (
        <Navbar>
            <Head>
                <title>Josephine Geoghegan</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <div className={`${scrollY > 500 ? scrollClasses[1] : scrollClasses[2]} flex items-center flex-col snap-section`}>
                <div className='h-[100vh]'>
                    <div className="text-center flex flex-col items-center justify-between lato stan_mob:text-2xl md:text-[46px] tab:text-4xl text-lg tab:h-[24vh] lan:h-[40vh] h-[27vh] md:h-[35vh] my-[30vh]">
                        <h1 className='max-w-[90vw]'>Hi, my name is Josephine.<FontAwesomeIcon className="mx-3 sm:text-[60px]" icon={faHandPeace} /></h1>
                        <h2 className='max-w-[90vw]'>I&apos;m looking for a job as a front-end developer.</h2>
                        <button onClick={() => {
                            window.scrollTo(0, window.innerHeight)
                        }} className="flex justify-center items-center w-[60%] sm:w-[40%] my-3 tab:text-4xl md:text-[46px] px-3 py-4 bg-[#27292C] text-white">
                            Let&apos;s go!<FontAwesomeIcon className="ml-2" icon={faArrowAltCircleDown} />
                        </button>
                    </div>
                </div>
                <div id="first-section" className=' snap-section w-full pt-[4%] h-[100vh]'>
                    <ul className='absolute z-50 text-white lato sm:text-[40px] lan:left-[15vw] left-[15vw] lg:left-[900px] mt-[30px]'>
                        <li className="cursor-pointer" onClick={() => {
                            handleSetState('contentsChosen', 0)
                            window.scrollTo(0, ((window.innerHeight) * 2));
                        }}><FontAwesomeIcon className="mr-4 sm:text-[30px]" icon={faTimeline} /> My Background</li>
                        <li className="cursor-pointer" onClick={() => {
                            handleSetState('contentsChosen', 1)
                            window.scrollTo(0, ((window.innerHeight) * 2));
                        }}><FontAwesomeIcon className="mr-4 sm:text-[30px]" icon={faPalette} />Creativity</li>
                        <li className="cursor-pointer" onClick={() => {
                            handleSetState('contentsChosen', 2)
                            window.scrollTo(0, ((window.innerHeight) * 2));
                        }}><FontAwesomeIcon className="mr-4 sm:text-[30px]" icon={faPuzzlePiece} />Puzzles I Enjoy</li>
                        <li className="cursor-pointer" onClick={() => {
                            handleSetState('contentsChosen', 3)
                            window.scrollTo(0, ((window.innerHeight) * 2));
                        }}><FontAwesomeIcon className="mr-4 sm:text-[30px]" icon={faPersonChalkboard} />Skills</li>
                    </ul>
                    <PhotoWrapper>
                        <Image src={landscapeAbout}
                            alt="clouds"
                            layout="fill"
                        />
                    </PhotoWrapper>
                </div>
                <div className='h-[20vh] justify-center flex flex-col text-center lato text-white'>
                    <h2 className='sm:mb-4 lg:text-[46px] text-[30px] tab:text-[40px]'>{contents[1][items.contentsChosen]}</h2>
                    <button onClick={() => {
                        let newVal;
                        (items.contentsChosen + 1) < 4 ? newVal = items.contentsChosen + 1 : newVal = 0
                        handleSetState('contentsChosen', newVal)
                    }}><FontAwesomeIcon className="text-[#f57c76] sm:mr-4 text-[30px]" icon={faChevronDown} /></button>
                </div>
                <Carousel
                    num={0}
                    hidden={items.contentsChosen}
                    firstColumn={carouselClasses[0]}
                    secondColumn={carouselClasses[0]}
                    thirdColumn={carouselClasses[0]}
                    firstPhoto={contents[0][0][0]}
                    secondPhoto={contents[0][0][1]}
                    thirdPhoto={contents[0][0][2]}
                    fourthPhoto={contents[0][0][3]}
                    firstParagraph={contents[2][0]}
                    secondParagraph={contents[3][0]}
                />
                <Carousel
                    num={1}
                    hidden={items.contentsChosen}
                    firstColumn={carouselClasses[1]}
                    secondColumn={carouselClasses[1]}
                    thirdColumn={carouselClasses[1]}
                    firstPhoto={contents[0][1][0]}
                    secondPhoto={contents[0][1][1]}
                    thirdPhoto={contents[0][1][2]}
                    fourthPhoto={contents[0][1][3]}
                    firstParagraph={contents[2][1]}
                    secondParagraph={contents[3][1]}
                />
                <Carousel
                    num={2}
                    hidden={items.contentsChosen}
                    firstColumn={carouselClasses[2]}
                    secondColumn={carouselClasses[2]}
                    thirdColumn={carouselClasses[2]}
                    firstPhoto={contents[0][2][0]}
                    secondPhoto={contents[0][2][1]}
                    thirdPhoto={contents[0][2][2]}
                    fourthPhoto={contents[0][2][3]}
                    firstParagraph={contents[2][2]}
                    secondParagraph={contents[3][2]}
                />
                <Carousel
                    num={3}
                    hidden={items.contentsChosen}
                    firstColumn={carouselClasses[3]}
                    secondColumn={carouselClasses[3]}
                    thirdColumn={carouselClasses[3]}
                    firstPhoto={contents[0][3][0]}
                    secondPhoto={contents[0][3][1]}
                    thirdPhoto={contents[0][3][2]}
                    fourthPhoto={contents[0][3][3]}
                    firstParagraph={contents[2][3]}
                    secondParagraph={contents[3][3]}
                />
            </div>
        </Navbar>
    )
}
