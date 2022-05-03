import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'

export default function Logo() {
    return (
        <>
            <div className="w-full h-[160px] z-20 absolute lan:top-[110px] top-[160px] flex flex-col items-center">
                <div>
                    <div className="flex-col bg-[#27292C] xs:w-[230px] xs:h-[210px] stan_mob:w-[310px] tab:w-[460px] tab:h-[420px] stan_mob:h-[275px] flex justify-center items-center">
                        <h1 className="lato xs:text-[34px] stan_mob:text-[48px] tab:text-[68px] text-white">
                            Your Next Hire
                        </h1>
                        <div className="bg-[#f57c76] xs:h-[6px] stan_mob:h-[8px] mid_mob:h-[6px] tab:h-[10px] xs:w-[210px] mid_mob:w-[210px] stan_mob:w-[290.5px] tab:w-[400px] stan_mob:mx-auto "></div>
                    </div>
                </div>
            </div>
        </>
    )
}
