import Image from 'next/image'
import Head from 'next/head';
import React, { useState, useEffect, useContext } from "react"
import Navbar from "../Components/Navbar";
import landscapeAbout from "../styles/images/landscapeAbout.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace, faArrowAltCircleDown, faTimeline, faPalette, faPuzzlePiece, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useThemes } from '../context/themeContext';
import useScrollPosition from '@react-hook/window-scroll'
import { useMouseWheel, useWindowSize } from 'react-use';

export default function Projects() {
    const {
        scrollClasses,
        handleMultipleStateChanges,
        items,
        handleSetState,
        imagesProjectsPage,
        imagesProjectsPageAlt,
        carouselClasses
    } = useThemes()
    const { width, height } = useWindowSize();
    const scrollY = useScrollPosition(60 /*frames per second*/);

    const PhotoWrapperProjectIcons = ({ children }) => {
        return <div className={`relative h-[50vh] pt-[50%] my-8 tab:my-[5vw] tab:mx-[5vw] tab:w-[40vw] w-[60vw] ${carouselClasses[items.imageProjectsChoice]}`}>{children}</div>;
    }

    return (
        <Navbar>
            <Head>
                <title>Josephine Geoghegan</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <div className={`${scrollY >= height ? scrollClasses[1] : scrollClasses[2]}`}>
                <div className='text-center w-full h-[100vh] flex flex-col justify-center items-center lato stan_mob:text-2xl md:text-[46px] tab:text-4xl text-lg'>
                    <h1 className='tab:px-8 px-4'>Would you like to take a look at other things I&apos;ve done?</h1>
                    <button onClick={() => {
                        window.scrollTo(0, height)
                    }} className='flex justify-center items-center w-[55vw] tab:w-[35vw] lan:w-[25vw] my-5 tab:text-4xl md:text-[46px] px-3 py-4 bg-[#27292C] text-white'>Let&apos;s go!<FontAwesomeIcon className="ml-2" icon={faArrowAltCircleDown} /></button>
                </div>
                <div className='items-center w-full flex flex-col big_mob:flex-row h-[100vh] min-h-fit'>
                    <PhotoWrapperProjectIcons>
                        <Image src={imagesProjectsPage[items.imageProjectsChoice]}
                            layout="fill"
                            alt={imagesProjectsPageAlt[items.imageProjectsChoice]}
                        />
                    </PhotoWrapperProjectIcons>
                    <div className='big_mob:w-[40vw] w-[50vw] flex items-center tab:space-between justify-center text-white lato tab:text-[40px] text-[15px]'>
                        <ul className='tab:px-4'>
                            <li className={`${items.imageProjectsChoice === 1 ? "text-[#f57c76]" : ""}`} onMouseOut={() => handleSetState("imageProjectsChoice", 0)} onMouseOver={() => {
                                handleSetState("imageProjectsChoice", 1)
                            }}><a href='https://github.com/Josephine-Ann/Algorithms'>Algorithm Repo on Github</a></li>
                            <li className={`${items.imageProjectsChoice === 2 ? "text-[#f57c76]" : ""}`} onMouseOut={() => handleSetState("imageProjectsChoice", 0)} onMouseOver={() => {
                                handleSetState("imageProjectsChoice", 2)
                            }}><a href="https://card-triage-next.vercel.app/">Patient Triage Application</a></li>
                            <li className={`${items.imageProjectsChoice === 3 ? "text-[#f57c76]" : ""}`} onMouseOut={() => handleSetState("imageProjectsChoice", 0)} onMouseOver={() => {
                                handleSetState("imageProjectsChoice", 3)
                            }}><a href='https://metrics-next.vercel.app/'>Metrics Application</a></li>
                            <li className={`${items.imageProjectsChoice === 4 ? "text-[#f57c76]" : ""}`} onMouseOut={() => handleSetState("imageProjectsChoice", 0)} onMouseOver={() => {
                                handleSetState("imageProjectsChoice", 4)
                            }}><a href="https://www.linkedin.com/in/josephine-geoghegan-920699b5/">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}


