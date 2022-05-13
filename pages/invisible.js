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
            </div>
        </Navbar>
    )
}


