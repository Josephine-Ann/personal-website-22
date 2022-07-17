import Image from 'next/image'
import Head from 'next/head';
import portraitMainPage from "../styles/images/portraitMainPage.jpg"
import landscapeMainPage from "../styles/images/landscapeMainPage.jpg"
import Navbar from "../Components/Navbar.js";
import Logo from "../Components/Logo.js";
import styles from '../styles/Home.module.css'
import { PhotoWrapper, LandscapePhotoWrapper } from "../Components/PhotoWrappers.js"
import React, { useState, useEffect, useContext } from "react"

export default function Home() {
  return (
    <Navbar>
      <Head>
        <title>Josephine Geoghegan</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <PhotoWrapper>
        <Image src={portraitMainPage}
          layout="fill"
          alt="office-space"
          loading="eager"
        />
      </PhotoWrapper>
      <LandscapePhotoWrapper>
        <Image src={landscapeMainPage}
          layout="fill"
          alt="office-space"
          loading="eager"
        />
      </LandscapePhotoWrapper>
      <Logo />
    </Navbar>
  )
}



