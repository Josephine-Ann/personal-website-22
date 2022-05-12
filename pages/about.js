import Image from 'next/image'
import React, { useState, useEffect, useContext } from "react"
import Navbar from "../Components/Navbar";
import landscapeAbout from "../styles/images/landscapeAbout.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace, faArrowAltCircleDown, faTimeline, faPalette, faPuzzlePiece, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useThemes } from '../context/themeContext';
import useScrollPosition from '@react-hook/window-scroll'
import { useMouseWheel } from 'react-use';

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
        let cadena = children.props.src.src
        let doubleDigits = cadena.substring(20, 33)
        cadena = cadena.substring(20, 32)
        return <div className={`relative pt-[50%] w-[80vw] lan:w-[28vw] tab:w-[38vw] sm:w-[28vw] lan:mx-auto ${cadena} ${doubleDigits} ${cadena === "background-3" || cadena === "background-7" || doubleDigits === "background-11" ? "hidden sm:block" : ""} ${items.changeInMotion ? "image-fade-in" : ""}`}>{children}</div>;
    }
    const PhotoWrapper = ({ children }) => {
        return <div className={`border-2 relative pt-[50%] ${items.photo ? "image-larger-down m-auto" : "w-[80vw] h-[40vh] lg:h-[80vh] m-auto"}`}>{children}</div>;
    }

    return (
        <Navbar>
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
                        (items.contentsChosen + 1) < 3 ? newVal = items.contentsChosen + 1 : newVal = 0
                        handleSetState('contentsChosen', newVal)
                    }}><FontAwesomeIcon className="text-[#f57c76] sm:mr-4 text-[30px]" icon={faChevronDown} /></button>
                </div>
                <div id="second-section" className="text-white lato w-full min-h-[80vh] flex justify-around">
                    <div className={`${carouselClasses[items.contentsChosen]} hidden mb-[10vh] sm:flex flex-col justify-between px-3  pt-4  tab:w-[40vw] lg:w-[25vw] lg:h-[550px] text-[25px] tab:text-[28px] lan:text-[20px]`}>
                        <SmallPhotoWrapper>
                            <Image src={contents[0][items.contentsChosen][0]}
                                layout="fill"
                                alt="colourful-pattern"
                            />
                        </SmallPhotoWrapper>
                        <p className=' lan:w-[28vw] lan:m-auto tab:my-4 w-[28vw] tab:w-[38vw]'>{contents[2][items.contentsChosen]}</p>
                    </div>
                    <div className={`${carouselClasses[items.contentsChosen]} mb-[10vh] lato flex tab:hidden xl-flex flex-col justify-between px-3 pt-4 w-[90vw] tab:text-[28px] tab:w-[40vw] lg:w-[25vw] lg:h-[550px] `}>
                        <SmallPhotoWrapper>
                            <Image src={contents[0][items.contentsChosen][1]}
                                layout="fill"
                                alt="colourful-pattern"
                            />
                        </SmallPhotoWrapper>
                        <p className='mt-4 sm:hidden'>{contents[2][items.contentsChosen]}</p>
                        <p className='sm:hidden'>{contents[3][items.contentsChosen]}</p>
                        <SmallPhotoWrapper>
                            <Image src={contents[0][items.contentsChosen][2]}
                                layout="fill"
                                alt="colourful-pattern"
                            />
                        </SmallPhotoWrapper>
                    </div>
                    <div className={`${carouselClasses[items.contentsChosen]} hidden mb-[10vh] tab:text-[28px] sm:flex flex-col justify-between px-3 pt-4 tab:w-[40vw] lg:w-[25vw] lg:h-[550px] text-[25px] tab:text-[20px] lan:text-[15px]`}>
                        <p className=' lan:w-[28vw] tab:w-[38vw] tab:my-4 lan:mx-auto w-[28vw] lan:text-[20px]'>{contents[3][items.contentsChosen]}</p>
                        <SmallPhotoWrapper>
                            <Image src={contents[0][items.contentsChosen][3]}
                                layout="fill"
                                alt="colourful-pattern"
                            />
                        </SmallPhotoWrapper>
                    </div>
                </div>
            </div>
        </Navbar >
    )
}


