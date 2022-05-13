import React from "react"
import Navbar from "../Components/Navbar";


export default function Invisible() {
    return (
        <Navbar>
            <div className="tab:h-[420px] tab:w-[460px] tab:mx-3">
                <div className="tab:h-[10px] tab:justify-end tab:bg-transparent tab:flex-row">
                    <h1 className="tab:text-[68px]">Hello</h1>
                </div>
                <div className="tab:h-[8vh] tab:w-[400px]">
                </div>
                <div className="xs:h-[210px]">
                    <div className="xs:h-[6px]">
                        <p className="tab:text-[68px]">Heyyyy</p>
                    </div>
                </div>
                <div className="xs:w-[230px]">

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


