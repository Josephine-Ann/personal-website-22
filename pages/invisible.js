import React from "react"
import Navbar from "../Components/Navbar";


export default function Invisible() {
    return (
        <Navbar>
            <div className="fixed tab:h-[420px] tab:w-[460px] tab:mx-3">
                <div className="bg-[#f57c76] tab:flex tab:h-[10px] tab:justify-end tab:bg-transparent tab:flex-row">
                    <h1 className="tab:text-[68px]">Hello</h1>
                </div>
                <div className="tab:h-[8vh] tab:w-[400px]">
                </div>
                <div className="xs:h-[210px] h-[160px] h-12 w-[100vw] z-40">
                    <div className="xs:h-[6px]">
                        <p className="flex justify-end bg-transparent tab:text-[68px] top-0 z-20">Heyyyy</p>
                        <ul>
                            <li className="text-4xl list-none"></li>
                        </ul>
                    </div>
                </div>
                <div className="xs:w-[230px] top-[160px] z-20">

                </div>
                <div className="xs:w-[210px]">
                    <h1 className="xs:text-[34px] stan_mob:mx-auto">Hello</h1>
                </div>
                <div className="mid_mob:h-[6px] mid_mob:w-[210px]">
                </div>
            </div>
            <div className="stan_mob:h-[275px]">
                <div className="stan_mob:h-[8px] stan_mob:w-[310px]"></div>
                <div className="xl:pt-[50%] xl:w-[100vw] xl:h-[100vh] stan_mob:w-[290.5px]">
                    <h1 className="stan_mob:text-[48px]">Yo yo yo</h1>
                </div>
            </div>
            <div className="lan:top-[110px] lan:block hidden xl:relative">
                <h1 className="lan:hidden">Si</h1>
            </div>
        </Navbar>
    )
}


