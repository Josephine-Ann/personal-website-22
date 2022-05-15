import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import { useThemes } from '../context/themeContext';
import Hello from "../styles/images/background-1.jpg"
export default function Carousel(props) {
    const {
        items,
        carouselClasses,
        contents
    } = useThemes()

    const slide = parseInt(props.slide, 10)
    console.log(contents[0][slide])

    const SmallPhotoWrapper = ({ children }) => {
        let cadena = children.props.src.src
        let doubleDigits = cadena.substring(20, 33)
        cadena = cadena.substring(20, 32)
        return <div className={`relative pt-[50%] w-[80vw] lan:w-[28vw] tab:w-[38vw] sm:w-[28vw] lan:mx-auto ${cadena} ${doubleDigits} ${cadena === "background-3" || cadena === "background-7" || doubleDigits === "background-11" ? "hidden sm:block" : ""} ${items.changeInMotion ? "image-fade-in" : ""}`}>{children}</div>;
    }
    return (
        <>
            <div id="second-section" className={`${slide !== items.contentsChosen ? "hidden " : ""} text-white lato w-full min-h-[80vh] flex justify-around`}>
                <div className={`${carouselClasses[slide]} hidden mb-[10vh] sm:flex flex-col justify-between px-3  pt-4  tab:w-[40vw] lg:w-[25vw] lg:h-[550px] text-[25px] tab:text-[28px] lan:text-[20px]`}>

                    <p className='mt-8 tab:mb-4 lan:w-[28vw] lan:mx-auto w-[28vw] tab:w-[38vw]'>{contents[2][slide]}</p>
                </div>
            </div>
        </>
    )
}

{/* <SmallPhotoWrapper>
<Image src={contents[0][slide][0].src}
    layout="fill"
    alt="colourful--pattern"
/>
</SmallPhotoWrapper> */}

{/* 

<div className={`${carouselClasses[slide]} hidden mb-[10vh] sm:flex flex-col justify-between px-3  pt-4  tab:w-[40vw] lg:w-[25vw] lg:h-[550px] text-[25px] tab:text-[28px] lan:text-[20px]`}>
<SmallPhotoWrapper>
    <Image src={contents[0][slide][0].src}
        layout="fill"
        alt="colourful--pattern"
    />
</SmallPhotoWrapper>
<p className='mt-8 tab:mb-4 lan:w-[28vw] lan:mx-auto w-[28vw] tab:w-[38vw]'>{contents[2][slide]}</p>
</div>
<div className={`${carouselClasses[slide]} mb-[10vh] lato flex tab:hidden xl-flex flex-col justify-between px-3 pt-4 w-[90vw] tab:text-[28px] tab:w-[40vw] lg:w-[25vw] lg:h-[550px] `}>
<SmallPhotoWrapper>
    <Image src={contents[0][slide][1].src}
        layout="fill"
        alt="colourful-pattern"
    />
</SmallPhotoWrapper>
<p className='sm:hidden'>{contents[2][slide]}</p>
<p className='sm:hidden'>{contents[3][slide]}</p>
<SmallPhotoWrapper>
    <Image src={contents[0][slide][2].src}
        layout="fill"
        alt="colourful-pattern"
    />
</SmallPhotoWrapper>
</div>
<div className={`${carouselClasses[slide]}  my-3  hidden mb-[10vh] tab:text-[28px] sm:flex flex-col justify-between px-3 pt-4 tab:w-[40vw] lg:w-[25vw] lg:h-[550px] text-[25px] tab:text-[28px] lan:text-[15px]`}>
<p className=' mb-8 lan:w-[28vw] tab:w-[38vw] tab:my-4 lan:mx-auto w-[28vw] lan:text-[20px]'>{contents[3][slide]}</p>
<SmallPhotoWrapper>
    <Image src={contents[0][slide][3].src}
        layout="fill"
        alt="colourful-pattern"
    />
</SmallPhotoWrapper>
</div> */}