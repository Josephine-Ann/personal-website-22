import { createContext } from "react";
import BackgroundOne from "../styles/images/background-1.jpg"
import BackgroundTwo from "../styles/images/background-2.jpg"
import BackgroundThree from "../styles/images/background-3.jpg"
import BackgroundFour from "../styles/images/background-4.jpg"
import BackgroundFive from "../styles/images/background-5.jpg"
import BackgroundSix from "../styles/images/background-6.jpg"
import BackgroundSeven from "../styles/images/background-7.jpg"
import BackgroundEight from "../styles/images/background-8.jpg"
import BackgroundNine from "../styles/images/background-9.jpg"
import BackgroundTen from "../styles/images/background-10.jpg"
import BackgroundEleven from "../styles/images/background-11.jpg"
import BackgroundTwelve from "../styles/images/background-12.jpg"
import BackgroundThirteen from "../styles/images/react.svg"
import BackgroundFourteen from "../styles/images/github.svg"
import BackgroundFifteen from "../styles/images/js.svg"
import BackgroundSixteen from "../styles/images/tailwind.svg"
import Algorithm from "../styles/images/algorithm.svg"
import Metrics from "../styles/images/metrics.svg"
import LinkedIn from "../styles/images/linked_in.svg"
import Stethoscope from "../styles/images/stethoscope.svg"
import Magic from "../styles/images/magic.svg"
import { useContext, useState } from "react";


export const ThemeContext = createContext()
export const useThemes = () => {
    const context = useContext(ThemeContext)
    return context
}

export const ThemeProvider = ({ children }) => {
    const scrollClasses = [
        "bg-[#f57c76] w-full h-fit",
        "w-full h-fit fade-colour-transition-down",
        "w-full h-fit fade-colour-transition-up",
        "w-full h-fit bg-[#282122]"
    ]
    const contents = [
        [
            [BackgroundOne, BackgroundTwo, BackgroundThree, BackgroundFour],
            [BackgroundFive, BackgroundSix, BackgroundSeven, BackgroundEight],
            [BackgroundNine, BackgroundTen, BackgroundEleven, BackgroundTwelve],
            [BackgroundThirteen, BackgroundFourteen, BackgroundFifteen, BackgroundSixteen]
        ],
        ["Background", "Creativity", "Puzzles", "Skills"],
        [
            "I’m transitioning from teaching English as a foreign language.  Teaching is a gift. It has helped me learn so much about how to engage with other people.",
            "I studied fine art and later I decided to study illustration abroad in Barcelona, which meant finding a way to support myself. Although teaching began as something I wasn’t particularly passionate about, that soon changed. I realised how much creativity, organisation and humility it required, and improving as a teacher meant improving upon my creativity. ",
            "I am a very socially driven person, and so I have tried to find mentors and learn about programming through their advice. I know that algorithm exams are the bane of their lives, and many resent having to do such an exam without ever finding a practical application for these skills in their job.",
            "I did a bootcamp related to Ruby on Rails, but I ultimately realised that I preferred working with JavaScript and React. Initially I was working with Create-React-App, but eventually I began a mentorship program and consequently I have moved further and further towards Next JS. I was lucky enough to become an intern at Miga Labs for a month, where I got to learn a lot more about Git. I love styling my HTML with Tailwind CSS. "

        ],
        [
            "I began learning about web development because I was obsessed with e-learning platforms. I am beyond excited to learn more about how I can use it to communicate new ideas.",
            "I had been educated to think that creativity was done for other creatives, and I soon realised that I prefer to use creativity to feel a sense of belonging and engagement in society at large. I have learnt how to engage with other people, I have learnt how to observe other people and carry out iterative processes, and I have learnt how incredibly lucky I am to have been able to study lateral thinking.",
            "I knew that algorithms were important to the job acquisition process, and I wasn’t prepared to take a hard stance on the whole thing. That’s why you can find a Github repo of my best attempts at solving algorithms here. I actually quite enjoyed them, especially after doing Colt Steele’s course on JS algorithms. ",
            "I am originally from Ireland, so English is my first language. However, I have been living abroad in Barcelona since late 2015, and I have a full professional capacity to work in Spanish. In terms of my soft skills, I am lucky to have come from a background in which I was encouraged to develop my communication skills and lateral thinking. In recent years, I have made a point to become more consistent and assertive. I have also learnt about negotiating."
        ]
    ]

    const imagesProjectsPage = [
        Magic, Algorithm, Stethoscope, Metrics, LinkedIn
    ]

    const imagesProjectsPageAlt = [
        "magical objects", "nodes", "stethoscope", "chart and nodes", "linked in icon"
    ]

    const carouselClasses = ["image-fade-in", "image-fade-in-2", "image-fade-in-3", "image-fade-in-4"]

    const [items, setItems] = useState({
        inMotion: 0,
        randomNumber: 0,
        changeInMotion: 0,
        contentsChosen: 0,
        scrollClass: 0,
        photo: false,
        carouselClass: 0,
        imageProjectsChoice: 0
    })
    const handleSetState = async (key, value) => {
        setItems({
            ...items,
            [key]: value
        })
    }
    const handleMultipleStateChanges = async (arrKeysValues) => {
        arrKeysValues.forEach(element => {
            handleSetState(element.key, element.value)
        });
        console.log(items)
    }
    return (
        <ThemeContext.Provider
            value={{
                items,
                contents,
                scrollClasses,
                handleSetState,
                carouselClasses,
                imagesProjectsPage,
                imagesProjectsPageAlt,
                handleMultipleStateChanges
            }}>
            {children}
        </ThemeContext.Provider>
    )
}
