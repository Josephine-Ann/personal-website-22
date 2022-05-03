import Image from 'next/image'
import React, { useState, useEffect, useContext } from "react"
import Navbar from "../Components/Navbar";
import landscapeAbout from "../styles/images/landscapeAbout.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace, faArrowAltCircleDown, faTimeline, faPalette, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { useThemes } from '../context/themeContext';

export default function About() {
    const {
        contents,
        handleScrollBottom,
        handleSetState,
        items,
        changeInMotion,
        scrollClasses,
        handleScrollTop
    } = useThemes()

    const SmallPhotoWrapper = ({ children }) => {
        return <div className={`relative pt-[50%] w-[28vw] ${changeInMotion ? "image-fade-in" : ""}`}>{children}</div>;
    }
    const PhotoWrapper = ({ children }) => {
        return <div className={`border-2 relative pt-[50%] ${items.photo ? "image-larger-down m-auto" : "w-[80vw] h-[80vh] m-auto"}`}>{children}</div>;
    }

    return (
        <Navbar>
            <div onWheel={() => {
                handleScrollTop()
            }} className={`${scrollClasses[items.scrollClass]} flex items-center flex-col snap-section`}>
                <div className="flex flex-col items-center justify-between lato text-[46px] h-[35vh] my-[30vh]">
                    <h1>Hi, my name is Josephine.<FontAwesomeIcon className="mx-3 text-[60px]" icon={faHandPeace} /></h1>
                    <h2>I'm looking for a job as a front-end developer.</h2>
                    <a onClick={() => { handleScrollTop() }} href="#first-section" className="flex justify-center items-center w-[40%] my-3 text-[46px] px-3 py-2 bg-[#27292C] text-white">
                        Let's go!<FontAwesomeIcon className="ml-2" icon={faArrowAltCircleDown} />
                    </a>
                </div>
                <div id="first-section" className='snap-section w-full pt-[4%] mt-10'>
                    <ul className='absolute z-50 text-white lato text-[40px] left-[900px] mt-[30px]'>
                        <li><a onClick={() => { handleSetState('contentsChosen', 0) }} href='#second-section'><FontAwesomeIcon className="mr-4 text-[30px]" icon={faTimeline} /> My Background</a></li>
                        <li><a onClick={() => { handleSetState('contentsChosen', 1) }} href='#second-section'><FontAwesomeIcon className="mr-4 text-[30px]" icon={faPalette} />Creativity</a></li>
                        <li><a onClick={() => { handleSetState('contentsChosen', 2) }} href='#second-section'><FontAwesomeIcon className="mr-4 text-[30px]" icon={faPuzzlePiece} />Puzzles I Enjoy</a></li>
                    </ul>
                    <PhotoWrapper>
                        <Image src={landscapeAbout}
                            layout="fill"
                        />
                    </PhotoWrapper>
                </div>
                <div onWheel={() => {
                    console.log('on wheel triggered')
                    handleScrollBottom()
                }} id="second-section" className="text-white lato w-full h-[100vh] flex justify-around mt-[20vh]">
                    <div className={`mb-[10vh] flex flex-col justify-between px-3  pt-16 w-[28vw] h-[90vh] text-[25px] `}>
                        <SmallPhotoWrapper>
                            <Image src={contents[0][items.contentsChosen][0]}
                                layout="fill"
                            />
                        </SmallPhotoWrapper>
                        {contents[2][items.contentsChosen]}
                    </div>
                    <div className={`mb-[10vh] lato flex flex-col justify-between px-3 pt-16 w-[28vw] h-[90vh] `}>
                        <SmallPhotoWrapper>
                            <Image src={contents[0][items.contentsChosen][1]}
                                layout="fill"
                            />
                        </SmallPhotoWrapper>
                        <h2 className='mb-4 text-[46px] mx-auto'>{contents[1][items.contentsChosen]}</h2>
                        <SmallPhotoWrapper>
                            <Image src={contents[0][items.contentsChosen][2]}
                                layout="fill"
                            />
                        </SmallPhotoWrapper>
                    </div>
                    <div className={`mb-[10vh] flex flex-col justify-between px-3 pt-16 w-[28vw] h-[90vh] text-[25px]`}>
                        {contents[3][items.contentsChosen]}
                        <p>Hi{items.contentsChosen}</p>
                        <SmallPhotoWrapper>
                            <Image src={contents[0][items.contentsChosen][3]}
                                layout="fill"
                            />
                        </SmallPhotoWrapper>
                    </div>
                </div>
            </div>
        </Navbar >
    )
}


