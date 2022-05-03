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
            [BackgroundNine, BackgroundTen, BackgroundEleven, BackgroundTwelve]
        ],
        ["Background", "Creativity", "Puzzles"],
        [
            "I’m transitioning from teaching English as a foreign language.  Teaching is a gift. It has helped me learn so much about how to engage with other people.",
            "I studied fine art and later I decided to study illustration abroad in Barcelona, which meant finding a way to support myself. Although teaching began as something I wasn’t particularly passionate about, that soon changed. I realised how much creativity, organisation and humility it required, and improving as a teacher meant improving upon my creativity. ",
            "I am a very socially driven person, and so I have tried to find mentors and learn about programming through their advice. I know that algorithm exams are the bane of their lives, and many resent having to do such an exam without ever finding a practical application for these skills in their job."
        ],
        [
            "I began learning about web development because I was obsessed with e-learning platforms. I am beyond excited to learn more about how I can use it to communicate new ideas.",
            "I had been educated to think that creativity was done for other creatives, and I soon realised that I prefer to use creativity to feel a sense of belonging and engagement in society at large. I have learnt how to engage with other people, I have learnt how to observe other people and carry out iterative processes, and I have learnt how incredibly lucky I am to have been able to study lateral thinking.",
            "I knew that algorithms were important to the job acquisition process, and I wasn’t prepared to take a hard stance on the whole thing. That’s why you can find a Github repo of my best attempts at solving algorithms here. I actually quite enjoyed them, especially after doing Colt Steele’s course on JS algorithms. "]
    ]


    const [items, setItems] = useState({
        changeInMotion: false,
        contentsChosen: 0,
        scrollClass: 0,
        photo: false
    })
    const handleSetState = async (key, value) => {
        setItems({
            ...items,
            [key]: value
        })
        // console.log(items)
    }
    const handleScrollBottom = () => {
        if (!items.changeInMotion) {
            handleSetState("changeInMotion", true)
            let oldValue;
            if (items.contentsChosen === 0) {
                oldValue = 1
            } else if (items.contentsChosen === 1) {
                oldValue = 2
            } else {
                oldValue = 0
            }
            handleSetState("contentsChosen", oldValue)
            setTimeout(function () {
                handleSetState("changeInMotion", false)
            }, 1500)
        } else {
            false
        }
    }

    const handleScrollTop = () => {
        let lastScrollTop = 0
        let st = window.pageYOffset || document.documentElement.scrollTop;
        (st > lastScrollTop) ? handleSetState("scrollClass", 1) : handleSetState("scrollClass", 0)
        lastScrollTop = st <= 0 ? 0 : st;
    }

    return (
        <ThemeContext.Provider
            value={{
                items,
                contents,
                handleScrollBottom,
                scrollClasses,
                handleSetState,
                handleScrollTop
            }}>
            {children}
        </ThemeContext.Provider>
    )
}
