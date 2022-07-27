import React from "react";

import style from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <h1>Home Page</h1>
      <a href="/" className={style.btn}>
        go back
      </a>

      <Image src="/img.jpg" width="500px" height="500px"></Image>

      {/* img link use korte chile [next.config.js] file a bolte hobe */}
      <Image
        src="https://images.pexels.com/photos/7717466/pexels-photo-7717466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        width="500px"
        height="500px"
      ></Image>
    </>
  );
}
