import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import { useThemes } from '../context/themeContext';
import {BackgroundOne} from '../styles/images/background-1.jpg'

export default function Carousel(props) {
    const {
        items,
        carouselClasses,
        contents
    } = useThemes()

    return (
        <>
            <div id="second-section" className={`${props.hidden !== props.num ? "hidden " : ""} text-white lato w-full min-h-[80vh] flex justify-around`}>
                <div className={`${props.firstColumn} hidden mb-[10vh] sm:flex flex-col justify-between px-3  pt-4  tab:w-[40vw] lg:w-[25vw] lg:h-[550px] text-[25px] tab:text-[28px] lan:text-[20px]`}>
                        <img 
                            className={`max-h-[15.5rem] relative w-[80vw] lan:w-[28vw] tab:w-[38vw] sm:w-[28vw] lan:mx-auto ${items.changeInMotion ? "img-fade-in" : ""}`}
                            src={props.firstPhoto}
                            layout="fill"
                            alt="colourful--pattern"
                        />
                    <p className='mt-8 tab:mb-4 lan:w-[28vw] lan:mx-auto tab:my-4 w-[28vw] tab:w-[38vw]'>{props.firstParagraph}</p>
                </div>
                <div className={`${props.secondColumn} mb-[10vh] lato flex tab:hidden xl-flex flex-col justify-between px-3 pt-4 w-[90vw] tab:text-[28px] tab:w-[40vw] lg:w-[25vw] lg:h-[550px] `}>
                        <img 
                            className={`max-h-[15.5rem] relative w-[80vw] lan:w-[28vw] tab:w-[38vw] sm:w-[28vw] lan:mx-auto ${items.changeInMotion ? "img-fade-in" : ""}`}
                            src={props.secondPhoto}
                            layout="fill"
                            alt="colourful-pattern"
                        />
                    <p className='sm:hidden'>{props.firstParagraph}</p>
                    <p className='sm:hidden'>{props.secondParagraph}</p>
                        <img 
                            className={`max-h-[15.5rem] hidden sm:block relative w-[80vw] lan:w-[28vw] tab:w-[38vw] sm:w-[28vw] lan:mx-auto ${items.changeInMotion ? "img-fade-in" : ""}`}
                            src={props.thirdPhoto}
                            layout="fill"
                            alt="colourful-pattern"
                        />
                </div>
                <div className={`${props.thirdColumn} my-3  hidden mb-[10vh] tab:text-[28px] sm:flex flex-col justify-between px-3 pt-4 tab:w-[40vw] lg:w-[25vw] lg:h-[550px] text-[25px] tab:text-[28px] lan:text-[15px]`}>
                    <p className='mb-8 lan:w-[28vw] tab:w-[38vw] tab:my-4 lan:mx-auto w-[28vw] lan:text-[20px]'>{props.secondParagraph}</p>
                        <img 
                            className={`max-h-[15.5rem] max-h-[15.5rem] relative w-[80vw] lan:w-[28vw] tab:w-[38vw] sm:w-[28vw] lan:mx-auto ${items.changeInMotion ? "img-fade-in" : ""}`}
                            src={props.fourthPhoto}
                            layout="fill"
                            alt="colourful-pattern"
                        />
                </div>
            </div>
        </>
    )
}
